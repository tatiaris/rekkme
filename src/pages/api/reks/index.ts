import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getErrorStatusCode } from '../helper';
import { deleteOneObject, findOneObject, getAllObjects, insertOneObject, updateOneObject } from '../prisma';

const collectionName = 'reks';
const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allUsers = await getAllObjects(collectionName);
    res.status(200).json({ success: true, users: allUsers });
  } catch (error) {
    const errorObj = error as Error;
    res.status(500).json({ success: false, message: errorObj.message });
  }
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body.newObject) {
      const newUserObject = req.body.newObject;
      const existingUser = findOneObject(collectionName, { email: newUserObject.email });
      if (existingUser) {
        throw new Error('406');
      } else {
        insertOneObject(collectionName, newUserObject);
        res.status(200).json({ success: true });
      }
    } else {
      throw new Error('400');
    }
  } catch (error) {
    const errorObj = error as Error;
    const statusCode = getErrorStatusCode(errorObj.message);
    res.status(statusCode).json({ success: false, message: errorObj.message });
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body.updatedObject) {
      const updatedUserObject = req.body.updatedObject;
      updateOneObject(collectionName, { id: updatedUserObject.id }, updatedUserObject);
      res.status(200).json({ success: true });
    } else {
      throw new Error('400');
    }
  } catch (error) {
    const errorObj = error as Error;
    const statusCode = getErrorStatusCode(errorObj.message);
    res.status(statusCode).json({ success: false, message: errorObj.message });
  }
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.query.id) {
      const deleteId = req.body.id;
      deleteOneObject(collectionName, { id: deleteId });
      res.status(200).json({ success: true });
    } else {
      throw new Error('400');
    }
  } catch (error) {
    const errorObj = error as Error;
    const statusCode = getErrorStatusCode(errorObj.message);
    res.status(statusCode).json({ success: false, message: errorObj.message });
  }
});

export default handler;
