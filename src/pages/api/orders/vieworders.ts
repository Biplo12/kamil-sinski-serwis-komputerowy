import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import validateMethod from '@/utils/validateMethod';

type TKey = 'status' | 'email';

type TRequestBody = {
  [key: string]: TKey;
};

type TQuery = {
  [key: string]: TKey;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const filters = req.body as TRequestBody;
    const filtersKeys = Object.keys(filters) as TKey[];

    // validation
    validateMethod(req.method as string, 'GET');
    const params: TQuery = {};

    if (filtersKeys.length > 0) {
      for (const key of filtersKeys) {
        params[key] = filters[key];
      }
    }

    const order = await prisma.orders.findMany({
      where: {
        ...params,
      },
    });

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: order });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
