import prisma from '@/utils/prisma';

const isOrderExist = async (orderId: number): Promise<boolean> => {
  const order = await prisma.orders.findUnique({
    where: {
      orderId,
    },
  });

  if (!order) {
    throw new Error('Order not found');
  }

  return true;
};

export default isOrderExist;
