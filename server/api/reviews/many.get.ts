import { defineEventHandler, getQuery } from 'h3';
import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const { userId, entityId } = getQuery(event);

	if (!userId && !entityId) {
		return { error: 'Missing either user ID or entity ID' };
	}

	const reviews = await prisma.reviews.findMany({
		where: {
			userId: userId ? Number(userId) : undefined,
			entityId: entityId ? Number(entityId) : undefined,
		},
		select: {
			text: true,
			rate: true,
			author: {
				select: {
					firstname: true,
					lastname: true,
				},
			},
		},
	});

	return reviews;
});
