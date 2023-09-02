import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/helpers/missingArguments';
import validateMail from '@/helpers/validateMail';
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

    validateMail(email);

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.signedUsers.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error('User already exists');
    }

    await prisma.signedUsers.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Signed up successfully',
      result: null,
    });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
