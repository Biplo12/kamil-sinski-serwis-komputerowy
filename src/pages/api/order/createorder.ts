import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

import missingArguments from '@/utils/missingArguments';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { email } = req.body;
    const missArgs = missingArguments({ email });
    if (missArgs.length > 0) {
      throw new Error(`Missing arguments: ${missArgs.join(', ')}`);
    }

    const orderId = '1234567890';

    const emailBody = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: `Potwierdzenie złoszenia zamówienia - Nie odpisuj na tę wiadomość. Numer zamówienia ${orderId}.`,
      text: `
        Dziękujemy za złożenie zamówienia w naszym serwisie komputerowym.
        Numer Twojego zamówienia to: ${orderId}.
        Sprawdź szczegóły zamówienia na stronie: https://www.example.com/order/${orderId}, 
        lub wejdź w zakładkę Status zamówienia w naszym serwisie i wpisz numer zamówienia.

        Pozdrawiamy,
        Zespół serwisu komputerowego kamilsinski.pl
      `,
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
