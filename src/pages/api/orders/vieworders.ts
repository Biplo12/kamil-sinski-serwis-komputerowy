import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import validateFiltersAndParams from '@/utils/validateFiltersAndParams';
import validateMethod from '@/utils/validateMethod';

type TKey = string | number;

type TRequestBody = {
  [key: string]: TKey;
};

type TQuery = TRequestBody;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const filters = req.query as TRequestBody;
    const filtersKeys = Object.keys(filters) as Array<keyof TRequestBody>;
    let limit = 10;
    let offset = 0;
    let orderBy = {};

    validateMethod(req.method as string, 'GET');
    validateFiltersAndParams(filtersKeys);

    if (filtersKeys.includes('limit') || filtersKeys.includes('offset')) {
      limit = parseInt(filters.limit as string) || 10;
      offset = parseInt(filters.offset as string) || 0;
      delete filters['limit'];
      delete filters['offset'];
    }

    if (filtersKeys.includes('orderBy')) {
      const orderField = filters.orderBy as string;
      delete filters['orderBy'];
      const orderDirection = filtersKeys.includes('orderDirection')
        ? filters.orderDirection
        : 'asc';
      delete filters['orderDirection'];
      orderBy = {
        [orderField]: orderDirection,
      };
    }

    const params: TQuery = {};
    if (filtersKeys.length > 0) {
      for (const key of filtersKeys) {
        if (key === 'price') {
          params[key] = parseFloat(filters[key] as string);
        } else {
          params[key] = filters[key];
        }
      }
    }

    const order = await prisma.orders.findMany({
      where: {
        ...params,
      },
      take: limit,
      skip: offset,
      orderBy,
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
