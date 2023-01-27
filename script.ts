import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: 'Junaid',
	// 		email: 'junaidhkn@gmail.com',
	// 		age: 22,
	// 	},
	// });
	// console.log(user);
}

main()
	.catch((e) => {
		console.log(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
