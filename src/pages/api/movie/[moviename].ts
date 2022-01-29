import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { moviename } = req.query;
    console.log(req.query.moviename);
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=` + moviename);
    const data = await resp.json();
    const newMovies = [];
    console.log(data);
    data.results.forEach((movie) => {
      newMovies.push({
        title: movie?.title || movie?.original_title || 'No Title Found',
        description: movie?.overview || 'No Description Found'
      });
    });
    res.status(200).json({ session: data });
  } catch (error) {
    res.status(200).json({ session: null });
  }
});

export default handler;
