import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params = {
      grant_type: 'client_credentials'
    };
    const searchParams = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      })
      .join('&');

    const { musicname } = req.query;
    const authstuff = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Basic ' + btoa(`${process.env.SPOTIFY_ID}:${process.env.SPOTIFY_SECRET}`),
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: searchParams
    });
    const authjson = await authstuff.json();
    const token = authjson.access_token;

    const songlist = await fetch(`https://api.spotify.com/v1/search?type=album&include_external=audio&q=${musicname}`, {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    });
    const songjson = await songlist.json();
    const songs = songjson.albums.items.map((test) => test.name);

    res.status(200).json({ session: songs });
  } catch (error) {
    res.status(200).json({ session: null });
  }
});

export default handler;
