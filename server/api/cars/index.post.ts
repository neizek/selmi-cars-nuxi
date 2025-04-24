import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const filters = await readBody(event);

	const cars = await prisma.cars.findMany({
		include: {
			make: {
				select: {
					name: true,
				},
			},
			model: {
				select: {
					name: true,
				},
			},
		},
		orderBy: filters.orderBy,
		where: filters.where ?? {},
	});

	return cars;
});
