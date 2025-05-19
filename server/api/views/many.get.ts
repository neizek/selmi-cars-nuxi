import { defineEventHandler, getQuery } from 'h3';
import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const { userId } = getQuery(event);

	if (!userId) {
		return { error: 'Missing userId parameter' };
	}

	const views = await prisma.views.findMany({
		where: { userId: Number(userId) },
		select: { carId: true },
	});

	return views.map((view) => view.carId);
});
