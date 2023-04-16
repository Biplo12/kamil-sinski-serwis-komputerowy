import { PrismaClient } from '@prisma/client';

// Prisma NextJS Hot Reloading

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.DEV_MODE !== 'false') globalForPrisma.prisma = prisma;

export default prisma;
