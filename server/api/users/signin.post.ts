import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	if (!body.email || !body.password) {
		throw createError({
			statusCode: 400,
			message: 'Email and password are required',
		});
	}

	const user = await prisma.user.findFirst({
		where: { email: body.email },
		include: {
			favorites: true,
			views: true,
		},
	});

	if (!user) {
		throw createError({
			status: 404,
			message: 'User does not exist',
		});
	}

	if ((await verifyPassword(user.password, body.password)) === false) {
		throw createError({
			statusCode: 401,
			message: 'Invalid password',
		});
	}

	const userSessionData = {
		user: {
			id: user.id,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
		},
	};

	await setUserSession(event, userSessionData);

	return {
		favorites: user.favorites.map((favorite) => favorite.carId),
		views: user.views.map((view) => view.carId),
	};
});
