import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getFriendList, getRekkData, sendRecommendation } from '../components/Helper';

interface processedRekkDataFormat {
  link: string;
  category: string;
  title: string;
  artist: string;
  tags: Array<string>;
  description: string;
  image?: string;
  location?: string;
}
const Rekk = (props): React.ReactNode => {
  const [processedRekkData, setProcessedRekkData] = useState<processedRekkDataFormat>();
  const [recommendeeList, setRecommendeeList] = useState<Array<string>>([]);
  const [friendList, setFriendList] = useState<Array<any>>([]);
  const [wagerValue, setWagerValue] = useState<number>(50);
  const [messageValue, setMessageValue] = useState<string>('');
  const [recommendationSent, setRecommendationSent] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const title = queryParams.get('title');
      const text = queryParams.get('text');
      const url = queryParams.get('url');
      const rawRekkData = { title, text, url };
      getRekkData(rawRekkData, setProcessedRekkData);
      getFriendList(setFriendList);
    }
  }, []);

  const toggleRecommendee = (username) => {
    if (recommendeeList.includes(username)) {
      setRecommendeeList(recommendeeList.filter((item) => item !== username));
    } else {
      setRecommendeeList([...recommendeeList, username]);
    }
  };

  const triggerSendRekk = () => {
    if (recommendeeList.length > 0) {
      const rekkData = {
        category: processedRekkData.category,
        usernames: friendList.map((friend) => friend.username),
        url: processedRekkData.link,
        wager: wagerValue,
        title: processedRekkData.title,
        imageUrl: processedRekkData.image,
        description: messageValue,
        tags: [],
        artist: processedRekkData.artist || '',
        location: processedRekkData.location || ''
      };
      sendRecommendation(rekkData, setRecommendationSent);
    }
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
          <br />
          <div>
            <img width="250px" src={processedRekkData?.image} alt="" style={{ borderRadius: '5px' }} />
          </div>
        </div>
        <br />
        <div className="rekk-form-inputs">
          <textarea onChange={(e) => setMessageValue(e.target.value)} placeholder="Type a message (optional) ..." />
          <br />
          <br />
          How much will they like it?
          <div style={{ height: '10px' }}></div>
          <div className="slider-container">
            <input type="range" min="50" max="100" defaultValue="50" className="slider" id="myRange" onChange={(e) => setWagerValue(parseInt(e.target.value))} />
            <div className="slider-value" style={{ textAlign: 'right' }}>
              {wagerValue}
            </div>
          </div>
        </div>
        Who to recommend?
        <div style={{ height: '10px' }}></div>
        <div className="friends-container">
          {friendList.map((friend, i) => (
            <div className="friend-container" key={i}>
              <button className="clear-btn" onClick={() => toggleRecommendee(friend.username)} style={{ position: 'relative' }}>
                <img width="50" src={friend.imageUrl} alt="" style={{ borderRadius: '50%' }} />
                <img width="50" src="/icons/check.svg" alt="" className={`overlay-img ${recommendeeList.includes(friend.username) ? 'show' : ''}`} />
              </button>
              <br />
              <span>{friend.firstName}</span>
            </div>
          ))}
        </div>
        <br />
        <button className="recommend-btn" onClick={triggerSendRekk}>
          Recommend
          <img width="20" src="/icons/like-dark.svg" alt="" style={{ paddingLeft: '10px' }} />
        </button>
        {/* {props.userSession?.username || "notloggedin"} */}
      </div>
    </>
  );
};

export default Rekk;
