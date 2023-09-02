import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/helpers/missingArguments';
import validateMethod from '@/helpers/validateMethod';
import sendMailFunction from '@/utils/sendMailFunction';

type TRequestBody = {
  name: string;
  email: string;
  message: string;
  subject: string;
  phone?: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { name, email, message, subject } = req.body as TRequestBody;
    validateMethod(req.method as string, 'POST');
    missingArguments({ name, email, message, subject });

    await sendMailFunction({
      to: process.env.SENDER_EMAIL_ADDRESS?.toString() || '',
      from: email,
      subject: subject,
    });

    res.status(200).json({ statusCode: 200, message: 'Success', result: null });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
