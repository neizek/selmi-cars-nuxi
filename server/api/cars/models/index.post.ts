import prisma from "~/utils/prisma";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const models = await prisma.carModel.findMany({
		where: {
			makeId: body.makeId
		}
	});

	return models 
})
  