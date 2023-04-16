import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

import missingArguments from '@/utils/missingArguments';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { name, email, message, subject, phone } = req.body;
    const missArgs = missingArguments({ name, email, message, subject });
    if (missArgs.length > 0) {
      throw new Error(`Missing arguments: ${missArgs.join(', ')}`);
    }

    const emailBody = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: subject,
      text: `From: ${name} <${email}>, ${
        phone ? `Phone: ${phone} \n\n${message}.` : null
      } `,
    };

    const transporter = createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail(emailBody);

    res.status(200).json({ statusCode: 200, message: 'Success' });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
