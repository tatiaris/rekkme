import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { updateOneObject } from '../prisma';

const collectionName = 'user';
const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const updatedUserObject = {
    email: 'rishabhtatia10104@gmail.com',
    fname: 'Rishabh',
    lname: 'Tatia',
    username: 'tatiaris01'
  };
  updateOneObject(collectionName, { id: '61870e8bbece457f44e6be75' }, updatedUserObject);
  res.status(200).json({ success: true });
});

export default handler;
