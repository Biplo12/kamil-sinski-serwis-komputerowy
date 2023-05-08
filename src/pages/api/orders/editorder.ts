import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import validateMethod from '@/utils/validateMethod';

type TRequestBody = {
  ordertitle: string;
  orderdescription: string;
  price: number;
  orderId: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { ordertitle, orderdescription, price, orderId } =
      req.body as TRequestBody;

    // validation
    validateMethod(req.method as string, 'PUT');
    const missArgs = missingArguments({
      ordertitle,
      orderdescription,
      price,
    });

    if (missArgs.length > 0) {
      res.status(400).json({
        statusCode: 400,
        message: `Missing arguments: ${missArgs.join(', ')}`,
      });
      return;
    }

    const order = await prisma.orders.update({
      where: {
        orderId,
      },
      data: {
        ordertitle,
        orderdescription,
        price,
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
