import prisma from "~/utils/prisma";

export default defineEventHandler(async () => {
	const make = await prisma.carMake.findMany();

	return make 
})
  