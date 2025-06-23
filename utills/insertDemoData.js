const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  
];

async function insertDemoData() {
  
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
