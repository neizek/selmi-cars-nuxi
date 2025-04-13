import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {
	const car = await readBody(event);

	await prisma.cars.create({
		data: {
			makeId: car.makeId,
			modelId: car.modelId,
			year: Number(car.year),
			price: Number(car.price),
			mileage: Number(car.mileage)
		}
	});
})
  