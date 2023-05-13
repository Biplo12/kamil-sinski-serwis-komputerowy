import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import validateFiltersAndParams from '@/utils/validateFiltersAndParams';
import validateMethod from '@/utils/validateMethod';

type TKey = string | number;

type TRequestBody = {
  [key: string]: TKey;
};

type TQuery = TRequestBody;

type OrdersOrderByWithRelationInput = {
  createdAt?: SortOrder;
};

type SortOrder = 'asc' | 'desc';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'GET');

    const filters = req.query as TRequestBody;
    const filtersKeys = Object.keys(filters) as Array<keyof TRequestBody>;

    validateFiltersAndParams(filtersKeys);

    let limit = 100;
    let offset = 0;
    let orderBy: OrdersOrderByWithRelationInput = {};

    if (filtersKeys.includes('limit')) {
      limit = parseInt(filters.limit as string) || limit;
      delete filters.limit;
    }

    if (filtersKeys.includes('offset')) {
      offset = parseInt(filters.offset as string) || offset;
      delete filters.offset;
    }

    if (filtersKeys.includes('orderBy')) {
      const orderField = filters.orderBy as string;
      delete filters.orderBy;
      const orderDirection = filters.orderDirection || 'asc';
      delete filters.orderDirection;
      orderBy = {
        [orderField]: orderDirection,
      };
    } else {
      orderBy = {
        createdAt: 'desc',
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

    const orders = await prisma.orders.findMany({
      where: params,
      take: limit,
      skip: offset,
      orderBy,
    });

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: orders });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
