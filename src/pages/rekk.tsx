import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getRekkData } from '../components/Helper';

const Rekk = (props): React.ReactNode => {
  const [processedRekkData, setProcessedRekkData] = useState({});

  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const title = queryParams.get('title');
      const text = queryParams.get('text');
      const url = queryParams.get('url');
      const rawRekkData = { title, text, url };
      getRekkData(rawRekkData, setProcessedRekkData);
    }
  }, []);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="New Rekk" />
      <div className="rekk-form-container">{props.userSession.username}</div>
    </>
  );
};

export default Rekk;
