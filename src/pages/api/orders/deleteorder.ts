import { NextApiRequest, NextApiResponse } from 'next';

import isOrderExist from '@/helpers/isOrderExist';
import missingArguments from '@/helpers/missingArguments';
import validateId from '@/helpers/validateId';
import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'DELETE');
    const { orderId } = req.query as { orderId: string };
    const id = parseInt(orderId);
    validateId(id);
    missingArguments({ orderId });

    await isOrderExist(id);

    const order = await prisma.orders.delete({
      where: {
        orderId: id,
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
