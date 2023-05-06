import { NextApiRequest, NextApiResponse } from 'next';

import getAccessToken from '@/utils/facebook/getAccessToken';
import getFanPageLikes from '@/utils/facebook/getFanPageLikes';
import validateMethod from '@/utils/validateMethod';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'GET');

    const accessToken = await getAccessToken();

    const likes = await getFanPageLikes(accessToken);
    res
      .status(200)
      .json({ statusCode: 200, message: 'Success', result: likes });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
