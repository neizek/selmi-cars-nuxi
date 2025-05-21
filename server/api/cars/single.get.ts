import { defineEventHandler, getQuery } from 'h3';
import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	try {
		// Extract userId from the query parameters
		const { id } = getQuery(event);

		if (!id) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Missing id in query parameters',
			});
		}

		// Fetch user data from the database
		const car = await prisma.cars.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				make: true,
				model: true,
				user: {
					select: {
						firstname: true,
						lastname: true,
						entity: true,
						reviews: true,
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
		});

		if (!car) {
			throw createError({
				statusCode: 404,
				statusMessage: 'Car not found',
			});
		}

		return {
			...car,
			carImages: car.carImages.map((ci) => ({
				s240: ci.images.s240File?.url,
				s480: ci.images.s480File?.url,
				s720: ci.images.s720File?.url,
				s1080: ci.images.s1080File?.url,
			})),
		};
		// return car;
	} catch (error) {
		console.error('Error fetching user data:', error);
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
		});
	}
});
