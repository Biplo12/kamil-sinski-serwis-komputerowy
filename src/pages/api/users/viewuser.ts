import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';

type TRequestBody = {
  userId: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { userId } = req.query as TRequestBody;

    const missArgs = missingArguments({ userId });

    if (missArgs.length > 0) {
      res.status(400).json({
        statusCode: 400,
        message: `Missing arguments: ${missArgs.join(', ')}`,
      });
      return;
    }

    if (userId.length !== 6) {
      res.status(400).json({ statusCode: 400, message: 'Invalid user id' });
      return;
    }

    const user = await prisma.users.findUnique({
      where: {
        userId: parseInt(userId),
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
