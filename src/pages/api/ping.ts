import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'pong!' });
});

export default handler;
