import type { Make } from '~/types/cars';
import prisma from '~/utils/prisma';

export default defineEventHandler(async () => {
	const make: Make[] = await prisma.carMake.findMany({
		include: {
			models: true,
		},
	});

	return make;
});
