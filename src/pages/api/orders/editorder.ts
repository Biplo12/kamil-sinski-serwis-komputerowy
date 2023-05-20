import { NextApiRequest, NextApiResponse } from 'next';

import isOrderExist from '@/helpers/isOrderExist';
import missingArguments from '@/helpers/missingArguments';
import validateId from '@/helpers/validateId';
import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';
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
    validateMethod(req.method as string, 'PUT');

    const { ordertitle, orderdescription, price, orderId } =
      req.body as TRequestBody;

    missingArguments({
      ordertitle,
      orderdescription,
      price,
    });

    const id = parseInt(orderId as unknown as string);
    validateId(id);
    await isOrderExist(id);

    const order = await prisma.orders.update({
      where: {
        orderId: id,
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
