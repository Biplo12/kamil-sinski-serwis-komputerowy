import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import capitalizeFirstLetter from '@/helpers/capitalizeFirstLetter';
import missingArguments from '@/helpers/missingArguments';
import validateMail from '@/helpers/validateMail';
import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';
import sendMailFunction from '@/utils/sendMailFunction';
type TRequestBody = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  ordertitle: string;
  orderdescription: string;
  price: number;
  status?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'POST');

    const {
      firstname,
      lastname,
      email,
      phonenumber,
      ordertitle,
      orderdescription,
      price,
    } = req.body as TRequestBody;

    missingArguments({
      firstname,
      lastname,
      email,
      phonenumber,
      ordertitle,
      orderdescription,
      price,
    });

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
      userId,
      userFullName: `${capitalizeFirstLetter(
        firstname
      )} ${capitalizeFirstLetter(lastname)}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'new',
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
