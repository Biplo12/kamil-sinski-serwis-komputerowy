// import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';
import prisma from '@/utils/prisma';
import validateMethod from '@/utils/validateMethod';

interface IRequestBody {
  email: string;
  password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body as IRequestBody;
    validateMethod('POST', req.method as string);
    missingArguments({ email, password });

    // const salt = bcrypt.genSaltSync(10);

    // bcrypt.hash(password, salt, (hash: string) => {
    // res.status(200).json({ hash });
    // });

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(404).json({
        statusCode: 404,
        message: 'User not found',
      });
      return;
    }

    // const compare = bcrypt.compareSync(password, user.password);

    // if (!compare) {
    //   res.status(401).json({
    //     statusCode: 401,
    //     message: 'Invalid password',
    //   });
    //   return;
    // }

    if (!user.isAdmin) {
      res.status(403).json({
        statusCode: 403,
        message: 'You are not an admin',
      });
      return;
    }

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      result: {
        id: user.id,
        email: user.email,
        // name: user.name,
        // surname: user.surname,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ statusCode: 500, error: error.message });
  }
};

export default handler;
