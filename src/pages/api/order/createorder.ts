// import { NextApiRequest, NextApiResponse } from 'next';
// import { createTransport } from 'nodemailer';

// import missingArguments from '@/utils/missingArguments';
// import prisma from '@/utils/prisma';

// interface IOrderData {
//   data: {
//     email: string;
//     orderStatus: string;
//   };
// }

// const handler = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> => {
//   try {
//     const { email } = req.body;
//     const missArgs = missingArguments({ email });
//     if (missArgs.length > 0) {
//       throw new Error(`Missing arguments: ${missArgs.join(', ')}`);
//     }

//     const orderData: IOrderData = {
//       data: {
//         email,
//         orderStatus: 'NEW',
//       },
//     };

//     const newOrder = await prisma.order.create(orderData);
//     const { _id } = newOrder;
//     const emailBody = {
//       from: process.env.EMAIL_ADDRESS,
//       to: email,
//       subject: `Potwierdzenie złoszenia zamówienia - Nie odpisuj na tę wiadomość. Numer zamówienia ${_id}.`,
//       text: `
//         Dziękujemy za złożenie zamówienia w naszym serwisie komputerowym.
//         Numer Twojego zamówienia to: ${_id}.
//         Sprawdź szczegóły zamówienia na stronie: https://www.kamilsinski.com/status-zamowienia/${_id},
//         lub wejdź w zakładkę Status zamówienia w naszym serwisie i wprowadź numer zamówienia.

//         Pozdrawiamy,
//         Zespół serwisu komputerowego kamilsinski.pl
//       `,
//     };

//     const transporter = createTransport({
//       port: 465,
//       host: 'smtp.gmail.com',
//       auth: {
//         user: process.env.SENDER_EMAIL_ADDRESS,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     await transporter.sendMail(emailBody);

//     res.status(200).json({ statusCode: 200, message: 'Success' });
//   } catch (err) {
//     const typedError = err as Error;
//     res.status(500).json({ statusCode: 500, message: typedError.message });
//   }
// };

// export default handler;
