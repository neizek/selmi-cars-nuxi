import prisma from "~/utils/prisma";

export default defineEventHandler(async () => {
	// const prisma = usePrismaClient();
	const make = await prisma.carMake.findMany();

	return make 
})
  