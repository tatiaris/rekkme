import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getErrorStatusCode } from './helper';
import { authenticated } from './user/auth';
import cookie from 'cookie';

const handler = nextConnect();

handler.post(
  authenticated(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          path: '/'
        })
      );
      res.json({ success: true, message: 'See ya later!' });
    } catch (error) {
      const errorObj = error as Error;
      const statusCode = getErrorStatusCode(errorObj.message);
      res.status(statusCode).json({ success: false, message: errorObj.message });
    }
  })
);

export default handler;
