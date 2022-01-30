import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getRekkData } from '../components/Helper';

interface processedRekkDataFormat {
  url: string;
  category: string;
  title: string;
  artist: string;
  tags: Array<string>;
  description: string;
  image: string;
}
const Rekk = (props): React.ReactNode => {
  const [processedRekkData, setProcessedRekkData] = useState<processedRekkDataFormat>();

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
      <div className="rekk-form-container">
        <div className="rekkcard" style={{ textAlign: 'center' }}>
          <img width="50" src="/badges/MusicBadge.png" alt="" style={{ borderRadius: '50%', border: '1px solid gold' }} />
          <br />
          <div style={{ height: '10px' }}></div>
          <span>
            <b>{processedRekkData?.title}</b> by <b>{processedRekkData?.artist}</b>
          </span>
          <br />
          <br />
          <div>
            <img width="300px" src={processedRekkData?.image} alt="" style={{ borderRadius: '5px' }} />
          </div>
        </div>
        <br />
        <div className="rekk-form-inputs">
          <textarea placeholder="Type a message (optional) ..." />
          <br />
          <br />
          <div className="slider-container">
            <input type="range" min="20" max="100" defaultValue="50" className="slider" id="myRange" />
          </div>
        </div>
        <br />
        <br />
        <button className="recommend-btn">
          Recommend
          <img width="20" src="/icons/like-dark.svg" alt="" style={{ paddingLeft: '10px' }} />
        </button>
        {/* {props.userSession?.username || "notloggedin"} */}
      </div>
    </>
  );
};

export default Rekk;
