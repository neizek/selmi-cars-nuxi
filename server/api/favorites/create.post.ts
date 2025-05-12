import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const { carId, userId } = await readBody(event);

	if (!carId) {
		throw createError({
			statusCode: 400,
			message: 'Car ID is required',
		});
	}

	if (!userId) {
		throw createError({
			statusCode: 401,
			message: 'Unauthorized',
		});
	}

	const existingFavorite = await prisma.favorites.findFirst({
		where: {
			carId: Number(carId),
			userId: Number(userId),
		},
	});

	if (existingFavorite) {
		throw createError({
			statusCode: 400,
			message: 'Car is already in favorites',
		});
	}

	const favorite = await prisma.favorites.create({
		data: {
			carId: Number(carId),
			userId: Number(userId),
		},
	});

	if (!favorite) {
		throw createError({
			statusCode: 500,
			message: 'Failed to add car to favorites',
		});
	}

	return {
		message: 'Car added to favorites successfully',
	};
});
