
import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const user = await prisma.user.findFirst({
		where: {email: body.email}
	});

	if (user === null) {
		throw createError({
			status: 404,
			message: 'User does not exist'  
		})
	}

	if (user !== undefined && user.password === body.password) {
	  	await setUserSession(event, {
			user: {
				id: user.id,
		 		firstname: user.firstname,
				lastname: user.lastname,
				email: user.email
			}
	  	})

	  return {}
	}

	throw createError({
		statusCode: 401,
		message: 'Bad credentials'
	})
})
  