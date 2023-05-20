import { NextApiRequest, NextApiResponse } from 'next';

import isOrderExist from '@/helpers/isOrderExist';
import missingArguments from '@/helpers/missingArguments';
import validateId from '@/helpers/validateId';
import validateMethod from '@/helpers/validateMethod';
import validateStatus from '@/helpers/validateStatus';
import prisma from '@/utils/prisma';
type TRequestBody = {
  status: 'diagnosing' | 'repairing' | 'repaired' | 'completed' | 'cancelled';
  orderId: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'PUT');

    const { status, orderId } = req.body as TRequestBody;

    missingArguments({
      status,
    });

    const id = parseInt(orderId as unknown as string);
    validateId(id);

    await isOrderExist(id);

    validateStatus(status);

    const order = await prisma.orders.findUnique({
      where: {
        orderId: id,
      },
    });

    const { status: currentStatus, orderId: currentOrderId } = order ?? {};

    if (
      (currentStatus === 'repairing' || currentStatus === 'repaired') &&
      (status === 'completed' || status === 'cancelled')
    ) {
      throw new Error(
        `Cannot change status from ${currentStatus} to completed or cancelled`
      );
    }

    if (currentStatus === 'repairing' && status === 'diagnosing') {
      throw new Error(
        `Cannot change status from ${currentStatus} to diagnosing`
      );
    }

    if (currentStatus === 'completed' && status === 'repairing') {
      throw new Error(
        `Cannot change status from ${currentStatus} to repairing`
      );
    }

    const updateData: { status: string; [key: string]: unknown } = {
      status,
    };
    updateData[`${status}At`] = new Date();

    await prisma.orders.update({
      where: {
        orderId: id,
      },
      data: updateData,
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      result: currentOrderId,
    });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({
      statusCode: 500,
      message: typedError.message,
    });
  }
};

export default handler;
