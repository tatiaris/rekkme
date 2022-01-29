import { useState } from 'react';
import StringInput from '../components/ui/StringInput';

type Person = {
  src: string;
  alt: string;
};

const Amazon = (): React.ReactNode => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<Person>();

  async function getInfo() {
    const res = await fetch(`/api/amazon/${encodeURIComponent(url as string)}`);
    const resjson = await res.json();
    console.log(resjson);
    setResult(resjson);
  }
  return (
    <>
      <StringInput config={{ name: 'name', label: 'Name', type: 'text', placeholder: 'Amazon URL' }} updateFunc={setUrl} />
      <div>{result?.alt}</div>
      <img src={result?.src || ''} alt={result?.alt || ''} width="500" />
      <button onClick={getInfo}>Go!</button>
    </>
  );
};

export default Amazon;
