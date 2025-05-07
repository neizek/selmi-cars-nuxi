import prisma from '~/utils/prisma';

export default defineEventHandler(async () => {
	const make = await prisma.carMake.findMany({
		include: {
			models: true,
		},
	});

	return make;
});
