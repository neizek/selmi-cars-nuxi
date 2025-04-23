import { defineEventHandler, readMultipartFormData } from "h3";
import { useStorage } from "#imports";
import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {
	try {
		const formData = await readMultipartFormData(event);
		console.log(formData);
		if (!formData || formData.length === 0) {
			return {
				statusCode: 400,
				body: { error: "No files uploaded" },
			};
		}

		const uploadedFiles = [];

		for (const file of formData) {
			if (!file.type?.startsWith("image/")) {
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

			const fileName = `${Date.now()}-${file.filename}`;

			const storage = useStorage("uploads");
			await storage.setItemRaw(fileName, file.data);

			await prisma.file.create({
				data: {
					name: fileName,
					url: `/uploads/${fileName}`,
					mimeType: file.type,
					size: "1234",
				},
			});

			uploadedFiles.push({
				originalName: file.filename,
				storedName: fileName,
				path: `/uploads/${fileName}`,
				type: file.type,
				size: file.data.length,
			});
		}

		return {
			statusCode: 201,
			body: {
				message: "Files uploaded successfully",
				files: uploadedFiles,
			},
		};
	} catch (error) {
		console.error("Error uploading files:", error);
		return {
			statusCode: 500,
			body: { error: "Error uploading files" },
		};
	}
});
