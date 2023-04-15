import { NextApiRequest, NextApiResponse } from 'next';

import missingArguments from '@/utils/missingArguments';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { name, email, message, subject } = req.body;
    const missArgs = missingArguments({ name, email, message, subject });
    if (missArgs.length > 0) {
      throw new Error(`Missing arguments: ${missArgs.join(', ')}`);
    }
    res.status(200).json({ statusCode: 200, message: 'Success' });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
