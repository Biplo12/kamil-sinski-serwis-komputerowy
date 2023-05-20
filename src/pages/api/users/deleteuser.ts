import { NextApiRequest, NextApiResponse } from 'next';

import isUserExist from '@/helpers/isUserExist';
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
    const { userId } = req.query as { userId: string };
    const id = parseInt(userId);
    validateId(id);
    missingArguments({ userId });

    isUserExist(id);

    const user = await prisma.users.delete({
      where: {
        userId: id,
      },
    });

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: user.userId });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
