import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { rate, text, userId, authorId } = body;

	// Get user from session (nuxt-auth-utils attaches it to event.context.auth)
	// const user = event.context.auth?.user;

	// if (!rate || !carId || !user.id || userId) {
	// 	return { error: 'Missing required fields' };
	// }

	try {
		await prisma.reviews.create({
			data: {
				rate,
				text,
				authorId,
				userId,
			},
		});
		return {};
	} catch (error) {
		return { error: 'Failed to create review', details: error };
	}
});
