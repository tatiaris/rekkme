import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { insertOneObject } from '../prisma';

const collectionName = 'user';
const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const newUserObject = {
    email: 'rishabhtatia10104@gmail.com',
    fname: 'Rishabh',
    lname: 'Tatia',
    username: 'tatiaris'
  };
  insertOneObject(collectionName, newUserObject);
  res.status(200).json({ success: true });
});

export default handler;
