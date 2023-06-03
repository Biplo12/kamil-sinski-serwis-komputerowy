import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'POST');

    const { data, type } = req.body;

    const userEmail = data?.email_addresses?.[0]?.email_address;
    const userId = data?.id;
    const userFirstName = data?.first_name;
    const userLastName = data?.last_name;
    const userPhoneNumber = data?.phone_numbers?.[0]?.phone_number;
    const isAdmin = false;
    const webhookType = type;

    if (webhookType !== 'user.created') {
      res.status(500).json({
        statusCode: 500,
        message: 'Webhook type is not user.created',
        result: null,
      });
      return;
    }

    const user = await prisma.users.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (user) {
      res.status(200).json({
        statusCode: 200,
        message: 'User already exists',
        result: user,
      });
      return;
    }

    const userData: Prisma.UsersCreateInput = {
      userId,
      email: userEmail,
      isAdmin,
      firstname: userFirstName,
      lastname: userLastName,
      phonenumber: userPhoneNumber,
    };

    const newUser = await prisma.users.create({
      data: userData,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'User created',
      result: newUser,
    });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
