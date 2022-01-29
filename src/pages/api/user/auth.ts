import { decode, verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { findOneObject } from '../prisma';

const isAdmin = async (jwt) => {
  const decoded = decode(jwt);
  const adminObject = await findOneObject('admin', { uid: decoded['id'] });
  return adminObject ? true : false;
};

const isSelf = async (jwt: string, id: string) => {
  const decoded = decode(jwt);
  return decoded['id'] === id;
};

export const authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  verify(req.cookies.auth, process.env.AUTH_TOKEN, async function (err, decoded) {
    if (!err && decoded) {
      fn(req, res);
    } else {
      res.status(401).json({ success: false, message: 'You are not authenticated' });
    }
  });
};

export const adminAuthorized = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  const hasAdminAccess = await isAdmin(req.cookies.auth);
  if (hasAdminAccess) {
    fn(req, res);
  } else {
    res.status(403).json({ success: false, message: 'You are not authorized' });
  }
};

export const selfAuthorized = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const hasSelfAccess = await isSelf(req.cookies.auth, id as string);
  if (hasSelfAccess) {
    fn(req, res);
  } else {
    res.status(403).json({ success: false, message: 'You are not authorized' });
  }
};
