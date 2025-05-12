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

	const favorite = await prisma.favorites.deleteMany({
		where: {
			carId: Number(carId),
			userId: Number(userId),
		},
	});

	if (!favorite) {
		throw createError({
			statusCode: 500,
			message: 'Failed to delete car from favorites',
		});
	}

	return {
		message: 'Car was removed from favorites successfully',
	};
});
