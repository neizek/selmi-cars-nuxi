import type { CreateCar } from '~/types/cars';
import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const car: CreateCar = await readBody(event);

	if (!car.carImages || car.carImages.length === 0) {
		return {
			statusCode: 400,
			body: { error: 'No any images were uploaded' },
		};
	}

	if (!car.makeId || !car.modelId) {
		return {
			statusCode: 400,
			body: { error: 'Car make and model are required' },
		};
	}

	const newCar = await prisma.cars.create({
		data: {
			makeId: car.makeId,
			modelId: car.modelId,
			year: Number(car.year),
			price: Number(car.price),
			mileage: Number(car.mileage),
			userId: Number(car.userId),
		},
	});

	for (const carImageId of car.carImages) {
		await prisma.carImages.create({
			data: {
				carId: newCar.id,
				imageId: Number(carImageId),
			},
		});
	}
});
