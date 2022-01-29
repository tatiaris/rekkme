import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getErrorStatusCode } from './helper';
import { findOneObject, insertOneObject } from './prisma';
import cookie from 'cookie';
import { sign } from 'jsonwebtoken';

const collectionName = 'user';
const handler = nextConnect();

export type NewUser = {
  id?: string;
  email: string;
  fname: string;
  lname: string;
  username: string;
};

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body.newUser && req.body.password) {
      const newUser = req.body.newUser as NewUser;
      const rawPassword = req.body.password;
      const existingUser = await findOneObject(collectionName, { email: newUser.email });
      if (existingUser) {
        throw new Error('406');
      } else {
        const saltPepperPassword = rawPassword + newUser.email + process.env.AUTH_SECRET_KEY;
        hash(saltPepperPassword, 10, async function (err, hash) {
          await insertOneObject(collectionName, newUser);
          const newUserObj = await findOneObject(collectionName, { email: newUser.email });
          await insertOneObject('auth', { uid: newUserObj.id, password: hash });
          const claims = { id: newUserObj.id };
          const jwt = sign(claims, process.env.AUTH_TOKEN);
          res.setHeader(
            'Set-Cookie',
            cookie.serialize('auth', jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== 'development',
              sameSite: 'strict',
              path: '/'
            })
          );
          res.status(200).json({ success: true });
        });
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

export default handler;
