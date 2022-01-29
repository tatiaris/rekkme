import { useState } from 'react';
import useSWR from 'swr';
import StringInput from '../components/ui/StringInput';

const Movie = (): React.ReactNode => {
  const [movies, setMovies] = useState([]);
const [movieName, setMovieName] = useState('');

async function getMovie() {
  console.log('hello')
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env("TMDB_API_KEY")}&query=` + movieName, fetch);
  const data = await res.json()
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  const newMovies = [];
  console.log(data)

    data.results.forEach((movie) => {
      newMovies.push({
          title: movie?.title || movie?.original_title || 'No Title Found',
          description: movie?.overview || 'No Description Found',
      });
    });
  setMovies(newMovies);
  }
  return (
    <>
      <StringInput config={{ name: 'name', label: 'Name', type: 'text', placeholder: 'Rick & Morty' }} updateFunc={setMovieName} />
      <div>
      {movies}
    </div>
    <button onClick={getMovie}>
  Activate Lasers
</button>
    </>
  );
};

export default Movie;
