import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import validateMethod from '@/utils/validateMethod';

interface TRequestBody {
  orderId: number;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'DELETE');
    const { orderId }: TRequestBody = req.body;

    missingArguments({ orderId });

    const isOrderExist = await prisma.orders.findUnique({
      where: {
        orderId,
      },
    });

    if (!isOrderExist) {
      throw new Error('Order not found');
    }

    const order = await prisma.orders.delete({
      where: {
        orderId,
      },
    });

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: order.orderId });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
