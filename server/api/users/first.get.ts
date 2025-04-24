import { defineEventHandler, getQuery } from 'h3';
import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	try {
		// Extract userId from the query parameters
		const { userId } = getQuery(event);

		if (!userId) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Missing userId in query parameters',
			});
		}

		// Fetch user data from the database
		const user = await prisma.user.findUnique({
			where: {
				id: Number(userId),
			},
		});

		if (!user) {
			throw createError({
				statusCode: 404,
				statusMessage: 'User not found',
			});
		}

		return user;
	} catch (error) {
		console.error('Error fetching user data:', error);
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
		});
	}
});
