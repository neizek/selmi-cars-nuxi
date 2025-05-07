import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const filters = await readBody(event);

	const cars = await prisma.cars.findMany({
		include: {
			make: {
				select: {
					name: true,
					slug: true,
				},
			},
			model: {
				select: {
					slug: true,
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

	return cars.map((car) => ({
		...car,
		carImages: car.carImages.map((ci) => ({
			s240: ci.images.s240File?.url,
			s480: ci.images.s480File?.url,
			s720: ci.images.s720File?.url,
			s1080: ci.images.s1080File?.url,
		})),
	}));

	// return cars;
});
