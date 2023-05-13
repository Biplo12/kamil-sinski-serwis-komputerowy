import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import validateId from '@/utils/validateId';
import validateMethod from '@/utils/validateMethod';

type TRequestBody = {
  orderId: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'GET');

    const { orderId } = req.query as TRequestBody;
    const id = parseInt(orderId);
    missingArguments({ orderId });

    validateId(id);

    const order = await prisma.orders.findUnique({
      where: {
        orderId: id,
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
