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
			carImages: {
				select: {
					images: {
						select: {
							s480File: {
								select: {
									url: true,
								},
							},
							s240File: {
								select: {
									url: true,
								},
							},
							s720File: {
								select: {
									url: true,
								},
							},
							s1080File: {
								select: {
									url: true,
								},
							},
						},
					},
				},
			},
		},
		orderBy: filters.orderBy,
		where: filters.where ?? {},
	});

	return cars;
});
