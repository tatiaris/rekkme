import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { findOneObject, updateOneObject } from '../prisma';
import { authenticated, selfAuthorized } from './auth';

const collectionName = 'user';
const handler = nextConnect();

handler.get(
  authenticated(
    selfAuthorized(async (req: NextApiRequest, res: NextApiResponse) => {
      const { id } = req.query;
      try {
        const uniqueUser = await findOneObject(collectionName, { id });
        res.status(200).json({ success: true, user: uniqueUser });
      } catch (error) {
        const errorObj = error as Error;
        res.status(500).json({ success: false, message: errorObj.message });
      }
    })
  )
);

handler.put(
  authenticated(
    selfAuthorized(async (req: NextApiRequest, res: NextApiResponse) => {
      const { id } = req.query;
      try {
        if (req.body.updatedObject) {
          const updatedUserObject = req.body.updatedObject;
          updateOneObject(collectionName, { id }, updatedUserObject);
          res.status(200).json({ success: true });
        } else {
          throw new Error('400');
        }
      } catch (error) {
        const errorObj = error as Error;
        if (errorObj.message == '400') {
          res.status(400).json({ success: false, message: errorObj.message });
        } else {
          res.status(500).json({ success: false, message: errorObj.message });
        }
      }
    })
  )
);

export default handler;
