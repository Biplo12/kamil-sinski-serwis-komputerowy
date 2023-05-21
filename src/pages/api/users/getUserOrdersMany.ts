import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/helpers/missingArguments';
import validateId from '@/helpers/validateId';
import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';

type TRequestQuery = {
  userId: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'GET');

    const { userId } = req.query as TRequestQuery;
    const id = parseInt(userId);
    missingArguments({ userId });

    validateId(id);

    const orders = await prisma.orders.findMany({
      where: {
        userId: id,
      },
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
