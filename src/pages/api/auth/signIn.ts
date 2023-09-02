import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/helpers/missingArguments';
import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { email, password } = req.body;
    validateMethod(req.method as string, 'POST');
    missingArguments({ email, password });

    const user = await prisma.signedUsers.findUnique({
      where: {
        email,
      },
    });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password as string
    );

    if (!isPasswordCorrect) {
      throw new Error('Invalid credentials');
    }

    res.status(200).json({
      statusCode: 200,
      message: 'Logged in successfully',
      result: user,
    });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
