import { useState } from 'react';
import StringInput from '../components/ui/StringInput';

const Movie = (): React.ReactNode => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');

  async function getMovie() {
    const res = await fetch(`/api/movie/${movieName}`);
    const resjson = await res.json();
    console.log(resjson.session.results);
    setMovies(resjson.session.results.map((item) => item.original_title + ','));
  }
  return (
    <>
      <StringInput config={{ name: 'name', label: 'Name', type: 'text', placeholder: 'Rick & Morty' }} updateFunc={setMovieName} />
      <div>{movies}</div>
      <button onClick={getMovie}>Go!</button>
    </>
  );
};

export default Movie;
