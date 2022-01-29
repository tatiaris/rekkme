import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getErrorStatusCode } from '../../helper';
import { deleteOneObject, findMultipleObjects, insertOneObject } from '../../prisma';

const collectionName = 'comments';
const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;
    const comments = await findMultipleObjects(collectionName, { rekid: id });
    res.status(200).json({ success: true, comments: comments });
  } catch (error) {
    const errorObj = error as Error;
    res.status(500).json({ success: false, message: errorObj.message });
  }
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body.newObject) {
      const id = req.query.id;
      const newCommentObject = req.body.newObject;
      newCommentObject.rekid = id;
      insertOneObject(collectionName, newCommentObject);
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
      const rekId = req.query.id;
      const deleteId = req.body.id;
      deleteOneObject(collectionName, { id: deleteId, rekid: rekId });
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
