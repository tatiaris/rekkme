import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { deleteOneObject } from '../prisma';

const collectionName = 'user';
const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  deleteOneObject(collectionName, { id: '61870e8bbece457f44e6be75' });
  res.status(200).json({ success: true });
});

export default handler;
