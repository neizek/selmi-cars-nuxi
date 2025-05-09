import type { UserSignUpPayload } from '~/types/users';
import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
	const user = (await readBody(event)) as UserSignUpPayload;

	if (!user) {
		throw createError({
			statusCode: 400,
			message: 'User data is required',
		});
	}

	const ifUserExists = await prisma.user.findUnique({
		where: { email: user.email },
	});

	if (ifUserExists) {
		throw createError({
			statusCode: 400,
			message: 'User already exists',
		});
	}

	const { firstname, lastname, email, password } = user;

	if (!firstname || !lastname || !email || !password) {
		throw createError({
			statusCode: 400,
			message: 'All fields are required',
		});
	}
	const hashedPassword = await hashPassword(password);

	const newUser = await prisma.user.create({
		data: {
			firstname: firstname,
			lastname: lastname,
			email,
			password: hashedPassword,
		},
	});

	return newUser;
});
