import { useState } from 'react';
import StringInput from '../components/ui/StringInput';

const Music = (): React.ReactNode => {
  const [songs, setSongs] = useState([]);
  const [songName, setSongName] = useState('');

  async function getSongs() {
    const res = await fetch(`/api/music/${songName}`);
    const resjson = await res.json();
    console.log(resjson.session);
    setSongs(resjson.session.map((item) => item + ','));
  }
  return (
    <>
      <StringInput config={{ name: 'name', label: 'Name', type: 'text', placeholder: 'Hello' }} updateFunc={setSongName} />
      <div>{songs}</div>
      <button onClick={getSongs}>Go!</button>
    </>
  );
};

export default Music;
