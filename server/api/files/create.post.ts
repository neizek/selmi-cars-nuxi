import { defineEventHandler, readMultipartFormData, type MultiPartData } from 'h3';
import { useStorage } from '#imports';
import prisma from '~/utils/prisma';
import sharp from 'sharp';
import type { File } from '~/types/files';

const imageSizes = [240, 480, 720, 1080];

async function saveImage(
	width: number,
	file: MultiPartData,
	format: 'webp' | 'jpg' | 'png' | 'svg' = 'webp'
): Promise<File> {
	const storage = useStorage('uploads');
	const { data, info } = await sharp(file.data)
		.rotate()
		.resize({ width: width })
		.toFormat('webp')
		.webp({ nearLossless: true, quality: 50 })
		.toBuffer({ resolveWithObject: true });

	const fileName = `${Date.now()}-s${width}.${format}`;

	await storage.setItemRaw(fileName, data);

	return {
		url: `/uploads/${fileName}`,
		mimeType: `image/${format}`,
		size: info.size,
	};
}

async function pushImagesToDB(files: File[]) {
	const [s240File, s480File, s720File, s1080File] = await Promise.all(
		files.map((file) =>
			prisma.file.create({
				data: file,
			})
		)
	);

	const imageSet = await prisma.image.create({
		data: {
			s240FileId: s240File.id,
			s480FileId: s480File.id,
			s720FileId: s720File.id,
			s1080FileId: s1080File.id,
		},
	});

	return imageSet.id;
}

export default defineEventHandler(async (event) => {
	let imageSetIds: number[] = [];

	try {
		const formData = await readMultipartFormData(event);

		if (!formData || formData.length === 0) {
			return {
				statusCode: 400,
				body: { error: 'No files uploaded' },
			};
		}

		for (const file of formData) {
			if (!file.type?.startsWith('image/')) {
				return {
					statusCode: 400,
					body: { error: `File ${file.filename} is not an image` },
				};
			}

			const MAX_FILE_SIZE = 5 * 1024 * 1024;

			if (file.data.length > MAX_FILE_SIZE) {
				return {
					statusCode: 400,
					body: { error: `File ${file.filename} exceeds maximum size of 5MB` },
				};
			}

			const imageModels = await Promise.all(
				imageSizes.map((width) => saveImage(width, file))
			);
			const imageSetId = await pushImagesToDB(imageModels);

			imageSetIds = [...imageSetIds, imageSetId];
		}

		return {
			statusCode: 201,
			body: {
				message: 'Files uploaded successfully',
				files: imageSetIds,
			},
		};
	} catch (error) {
		console.error('Error uploading files:', error);
		return {
			statusCode: 500,
			body: { error: 'Error uploading files' },
		};
	}
});
