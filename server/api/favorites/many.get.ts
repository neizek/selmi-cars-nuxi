import { defineEventHandler, getQuery } from 'h3';
import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const { userId } = getQuery(event);

	if (!userId) {
		return { error: 'Missing userId parameter' };
	}

	const favorites = await prisma.favorites.findMany({
		where: { userId: Number(userId) },
		select: { carId: true },
	});

	return favorites.map((fav) => fav.carId);
});
