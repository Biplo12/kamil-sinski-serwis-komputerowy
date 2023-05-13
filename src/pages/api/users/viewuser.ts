import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import validateId from '@/utils/validateId';
import validateMethod from '@/utils/validateMethod';

type TRequestBody = {
  userId: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'GET');

    const { userId } = req.query as TRequestBody;
    const id = parseInt(userId);
    missingArguments({ userId });

    validateId(id);

    const user = await prisma.users.findUnique({
      where: {
        userId: id,
      },
    });

    if (!user) {
      res
        .status(404)
        .json({ statusCode: 404, message: 'User not found', result: null });
      return;
    }

    res.status(200).json({ statusCode: 200, message: 'Success', result: user });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
