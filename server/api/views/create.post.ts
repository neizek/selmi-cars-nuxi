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

	const existingView = await prisma.views.findFirst({
		where: {
			carId: Number(carId),
			userId: Number(userId),
		},
	});

	if (existingView) {
		throw createError({
			statusCode: 400,
			message: 'Car was already viewed',
		});
	}

	const view = await prisma.views.create({
		data: {
			carId: Number(carId),
			userId: Number(userId),
		},
	});

	if (!view) {
		throw createError({
			statusCode: 500,
			message: 'Failed to add car to views',
		});
	}

	return {
		message: 'Car was viewed successfully',
	};
});
