import React from 'react';

const Rekk = (): React.ReactNode => {
  const queryParams = new URLSearchParams(window.location.search);
  const title = queryParams.get('title');

  return <>Rekk Page: {title}</>;
};

export default Rekk;
