import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import sendMailFunction from '@/utils/sendMailFunction';
import validateMail from '@/utils/validateMail';
import validateMethod from '@/utils/validateMethod';

interface IOrderData {
  email: string;
  status: string;
  message: string;
  statusMessage: string;
}

type TRequestBody = {
  email: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { email } = req.body as TRequestBody;

    // validation
    validateMethod(req.method as string, 'POST');
    const missArgs = missingArguments({ email });
    if (missArgs.length > 0) {
      res.status(400).json({
        statusCode: 400,
        message: `Missing arguments: ${missArgs.join(', ')}`,
      });
      return;
    }
    validateMail(email);

    const orderData: IOrderData = {
      email,
      status: 'new',
      message: '',
      statusMessage: 'Zamówienie zostało złożone.',
    };

    const newOrder = await prisma.orders.create({
      data: orderData,
    });
    const { id } = newOrder;

    await sendMailFunction({
      to: email,
      subject: `Potwierdzenie złoszenia zamówienia - Nie odpisuj na tę wiadomość. Numer zamówienia ${id}.`,
      text: `
        Dziękujemy za złożenie zamówienia w naszym serwisie komputerowym.
        Numer Twojego zamówienia to: ${id}.
        Sprawdź szczegóły zamówienia na stronie: https://www.kamilsinski.com/status-zamowienia/?id-zamowienia=${id},
        lub wejdź w zakładkę Status zamówienia w naszym serwisie i wprowadź numer zamówienia.

        Pozdrawiamy,
        Zespół serwisu komputerowego kamilsinski.pl
      `,
    });

    res.status(200).json({ statusCode: 200, message: 'Success', result: id });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
