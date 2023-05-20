import { NextApiRequest, NextApiResponse } from 'next';

import validateFiltersAndParams from '@/helpers/validateFiltersAndParams';
import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';
type TKey = string | number;

type TRequestQuery = {
  [key: string]: TKey;
};

type TQuery = TRequestQuery;

type UsersOrderByWithRelationInput = {
  createdAt?: SortUser;
};

type SortUser = 'asc' | 'desc';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'GET');

    const filters = req.query as TRequestQuery;
    const filtersKeys = Object.keys(filters) as Array<keyof TRequestQuery>;
    let limit = 100;
    let offset = 0;
    let orderBy: UsersOrderByWithRelationInput = {};

    validateFiltersAndParams(filtersKeys);

    if (filtersKeys.includes('limit') || filtersKeys.includes('offset')) {
      limit = parseInt(filters.limit as string) || 10;
      offset = parseInt(filters.offset as string) || 0;
      delete filters['limit'];
      delete filters['offset'];
    }

    if (filtersKeys.includes('orderBy')) {
      const userField = filters.orderBy as string;
      delete filters['orderBy'];
      const userDirection = filtersKeys.includes('userDirection')
        ? filters.userDirection
        : 'asc';
      delete filters['userDirection'];
      orderBy = {
        [userField]: userDirection,
      };
    }

    const params: TQuery = {};
    if (filtersKeys.length > 0) {
      for (const key of filtersKeys) {
        params[key] = filters[key];
      }
    }

    const users = await prisma.users.findMany({
      where: {
        ...params,
      },
      take: limit,
      skip: offset,
      orderBy,
    });

    const modifiedUsers = users.map((user) => {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { password, isAdmin, ...rest } = user;
      return rest;
    });

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: modifiedUsers });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
