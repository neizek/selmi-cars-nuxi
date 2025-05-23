import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const filters = await readBody(event);

	const userSession = await getUserSession(event);

	const cars = await prisma.cars.findMany({
		select: {
			id: true,
			year: true,
			mileage: true,
			createdAt: true,
			price: true,
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
				take: 4,
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
			views: {
				where: {
					userId: userSession?.userId as number,
				},
			},
		},
		take: filters.take,
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
