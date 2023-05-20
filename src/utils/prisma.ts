import { PrismaClient } from '@prisma/client';

import { isLocal } from '@/constant/env';

// Prisma NextJS Hot Reloading

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (isLocal) globalForPrisma.prisma = prisma;

export default prisma;
