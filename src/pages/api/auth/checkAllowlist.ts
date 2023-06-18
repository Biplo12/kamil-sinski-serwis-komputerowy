import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/helpers/missingArguments';
import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { email } = req.query as { email: string };

    validateMethod(req.method as string, 'GET');
    missingArguments({ email });

    const isAllowed = await prisma.allowList.findUnique({
      where: {
        email,
      },
    });

    const isAllowedBoolean = isAllowed ? true : false;

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: isAllowedBoolean });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
