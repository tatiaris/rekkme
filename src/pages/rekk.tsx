import React, { useEffect, useState } from 'react';

const Rekk = (): React.ReactNode => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const title = queryParams.get('title');
      const text = queryParams.get('text');
      const url = queryParams.get('url');
      setTitle(title);
      setText(text);
      setUrl(url);
    } else {
      setTitle('Rekk');
    }
  }, []);

  return (
    <>
      Rekk Page: {title}, {text}, {url}
    </>
  );
};

export default Rekk;
