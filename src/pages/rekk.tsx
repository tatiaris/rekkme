import React, { useEffect, useState } from 'react';

const Rekk = (): React.ReactNode => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const title = queryParams.get('title');
      setTitle(title);
    }
  }, []);

  return <>Rekk Page: {title}</>;
};

export default Rekk;
