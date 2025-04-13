import type { UserSignUpPayload } from "~/types/users";
import prisma from "~/utils/prisma"

export default defineEventHandler(async (event) => {
	const user = await readBody(event) as UserSignUpPayload

	if (!user) {
		throw createError({
			statusCode: 400,
			message: 'User data is required'
		})
	}

	const { firstName, lastName, email, password } = user

	if (!firstName || !lastName || !email || !password) {
		throw createError({
			statusCode: 400,
			message: 'All fields are required'
		})
	}

	const newUser = await prisma.user.create({
		data: {
			firstname: firstName,
			lastname: lastName,
			email,
			password
		}
	})

	return newUser
});