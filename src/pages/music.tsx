import { useState } from 'react';
import useSWR from 'swr';
import StringInput from '../components/ui/StringInput';

const Movie = (): React.ReactNode => {
  const [movies, setMovies] = useState([]);

  function getSong(name) {
    const { data, error } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=` + name, fetch);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    data.json().then((jsonData) => {
      jsonData.results.forEach((movie) => {
        if (!movies.find((m) => m.title === movie.title)) {
          const joined = movies.concat({
            title: movie?.title || movie?.original_title || 'No Title Found',
            description: movie?.overview || 'No Description Found'
          });
          setMovies(joined);
        }
      });
    });
  }

  return <StringInput config={{ name: 'name', label: 'Song Title', type: 'text', placeholder: 'Rick & Morty' }} updateFunc={getSong} />;
};

export default Movie;
