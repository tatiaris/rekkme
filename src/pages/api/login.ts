import { compare } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getErrorStatusCode } from './helper';
import { findOneObject } from './prisma';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

const collectionName = 'user';
const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body.username && req.body.password) {
      const username = req.body.username;
      const rawPassword = req.body.password;
      const existingUserWithUsername = await findOneObject(collectionName, { username });
      const existingUserWithEmail = await findOneObject(collectionName, { email: username });
      const existingUser = existingUserWithUsername ? existingUserWithUsername : existingUserWithEmail;
      if (existingUser) {
        const userAuth = await findOneObject('auth', { uid: existingUser.id });
        const saltPepperPassword = rawPassword + existingUser.email + process.env.AUTH_SECRET_KEY;
        compare(saltPepperPassword, userAuth.password, function (err, result) {
          if (!err && result) {
            const claims = { id: existingUser.id };
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
            res.json({ success: true, authToken: jwt, message: 'Welcome back!' });
          } else {
            res.json({ success: false, message: 'Wrong username or password' });
          }
        });
      } else {
        res.json({ success: false, message: 'Wrong username or password' });
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
