import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import validateMethod from '@/utils/validateMethod';

type TRequestBody = {
  orderId: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { orderId } = req.query as TRequestBody;

    validateMethod(req.method as string, 'GET');
    const missArgs = missingArguments({ orderId });

    if (missArgs.length > 0) {
      res.status(400).json({
        statusCode: 400,
        message: `Missing arguments: ${missArgs.join(', ')}`,
      });
      return;
    }

    if (orderId.length !== 6) {
      res.status(400).json({ statusCode: 400, message: 'Invalid order id' });
      return;
    }

    const order = await prisma.orders.findUnique({
      where: {
        orderId: parseInt(orderId),
      },
    });

    if (!order) {
      res
        .status(404)
        .json({ statusCode: 404, message: 'Order not found', result: null });
      return;
    }

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: order });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
