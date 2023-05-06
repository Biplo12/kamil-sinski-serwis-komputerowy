import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import sendMailFunction from '@/utils/sendMailFunction';
import validateMail from '@/utils/validateMail';
import validateMethod from '@/utils/validateMethod';

type TRequestBody = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  ordertitle: string;
  orderdescription: string;
  price: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const {
      firstname,
      lastname,
      email,
      phonenumber,
      ordertitle,
      orderdescription,
      price,
    } = req.body as TRequestBody;

    // validation
    validateMethod(req.method as string, 'POST');
    const missArgs = missingArguments({
      firstname,
      lastname,
      email,
      phonenumber,
      ordertitle,
      orderdescription,
      price,
    });
    if (missArgs.length > 0) {
      res.status(400).json({
        statusCode: 400,
        message: `Missing arguments: ${missArgs.join(', ')}`,
      });
      return;
    }
    validateMail(email);

    const userId = Math.floor(Math.random() * 1000000);
    const orderId = Math.floor(Math.random() * 1000000);

    const userData: Prisma.UsersCreateInput = {
      userId,
      firstname: capitalizeFirstLetter(firstname),
      lastname: capitalizeFirstLetter(lastname),
      email,
      phonenumber,
      isAdmin: false,
    };

    const orderData: Prisma.OrdersCreateInput = {
      orderId,
      ordertitle,
      orderdescription,
      price,
      clientFullName: `${capitalizeFirstLetter(
        firstname
      )} ${capitalizeFirstLetter(lastname)}`,
      status: 'new',
      statusMessage: 'Zamówienie zostało złożone.',
      repairingAt: 'N/A',
      repairedAt: 'N/A',
    };

    const isInDB = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!isInDB) {
      await prisma.users.create({
        data: userData,
      });
    } else {
      await prisma.users.update({
        where: {
          email,
        },
        data: userData,
      });
    }

    await prisma.orders.create({
      data: orderData,
    });

    await sendMailFunction({
      to: email,
      subject: `Potwierdzenie złoszenia zamówienia.`,
      values: {
        firstname: capitalizeFirstLetter(firstname),
        lastname: capitalizeFirstLetter(lastname),
        orderId,
      },
    });

    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: orderId });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
