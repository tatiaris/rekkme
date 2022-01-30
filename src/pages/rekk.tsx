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
  const [recommendeeList, setRecommendeeList] = useState<Array<string>>([]);

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

  const addRecommendee = (id): void => {
    setRecommendeeList([...recommendeeList, id]);
  };

  const removeRecommendee = (id): void => {
    setRecommendeeList(recommendeeList.filter((recommendee) => recommendee !== id));
  };

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
          {processedRekkData?.title}
          <br />
          <br />
          <div>
            <img width="250px" src={processedRekkData?.image} alt="" style={{ borderRadius: '5px' }} />
          </div>
        </div>
        <br />
        <div className="rekk-form-inputs">
          <textarea placeholder="Type a message (optional) ..." />
          <br />
          <br />
          How much will they like it?
          <div style={{ height: '10px' }}></div>
          <div className="slider-container">
            <input type="range" min="20" max="100" defaultValue="50" className="slider" id="myRange" />
          </div>
        </div>
        <br />
        Who to recommend?
        <div style={{ height: '10px' }}></div>
        <div className="friends-container">
          <div className="friend-container">
            <button className="clear-btn" onClick={() => addRecommendee('1')} style={{ position: 'relative' }}>
              <img width="50" src="/misc/gavatar.png" alt="" style={{ borderRadius: '50%' }} />
              <img width="50" src="/icons/check.svg" alt="" className={`overlay-img`} />
            </button>
            <br />
            <span>Dan</span>
          </div>
          <div className="friend-container">
            <img width="50px" src="/misc/bavatar.png" alt="" style={{ borderRadius: '50%' }} />
            <br />
            <span>Greg</span>
          </div>
        </div>
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
