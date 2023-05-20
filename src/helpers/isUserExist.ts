import prisma from '@/utils/prisma';

const isUserExist = async (userId: number): Promise<boolean> => {
  const user = await prisma.users.findUnique({
    where: {
      userId,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return true;
};

export default isUserExist;
