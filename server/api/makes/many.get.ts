import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const { includeModels } = getQuery(event);

	const make = await prisma.carMake.findMany({
		include: {
			models: includeModels === 'true',
		},
	});

	return make;
});
