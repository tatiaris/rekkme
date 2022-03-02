import { User } from 'components/interfaces';
import StringInput from 'components/ui/inputs/StringInput';
import Spacer from 'components/ui/Spacer';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getFriendList, getRekkData, sendRecommendation } from '../components/Helper';
import Notification from '../components/ui/Notification';
import styles from '../components/ui/styles/pages/rekk.module.css';

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
  const [receivedRekkData, setReceivedRekkData] = useState<boolean>(false);
  const [processedRekkData, setProcessedRekkData] = useState<processedRekkDataFormat>();
  const [recommendeeList, setRecommendeeList] = useState<Array<string>>([]);
  const [friendList, setFriendList] = useState<Array<User>>([]);
  const [wagerValue, setWagerValue] = useState<number>(50);
  const [messageValue, setMessageValue] = useState<string>('');
  const [recommendationSent, setRecommendationSent] = useState<boolean>(false);
  const [rekkFromApp, setRekkFromApp] = useState<boolean>(true);
  const [chosenCategory, setChosenCategory] = useState<string>('other');
  const [chosenUrl, setChosenUrl] = useState<string>('#');
  const [chosenTitle, setChosenTitle] = useState<string>('');
  const [chosenArtist, setChosenArtist] = useState<string>('');
  const [chosenTags, setChosenTags] = useState<Array<string>>([]);
  const [chosenImage, setChosenImage] = useState<string>('https://picsum.photos/500/500');
  const [chosenLocation, setChosenLocation] = useState<string>('');

  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const title = queryParams.get('title');
      const text = queryParams.get('text');
      const url = queryParams.get('url');
      if (title || text || url) {
        const rawRekkData = { title, text, url };
        getRekkData(rawRekkData, setProcessedRekkData);
      } else {
        setRekkFromApp(false);
      }
      getFriendList(setFriendList);
    }
  }, []);

  useEffect(() => {
    if (processedRekkData) {
      setReceivedRekkData(true);
    }
  }, [processedRekkData]);

  const toggleRecommendee = (username) => {
    if (recommendeeList.includes(username)) {
      setRecommendeeList(recommendeeList.filter((item) => item !== username));
    } else {
      setRecommendeeList([...recommendeeList, username]);
    }
  };

  const triggerSendRekk = () => {
    if (recommendeeList.length > 0) {
      let rekkData = {};
      if (rekkFromApp) {
        rekkData = {
          category: processedRekkData.category,
          usernames: recommendeeList,
          url: processedRekkData.link,
          wager: wagerValue,
          title: processedRekkData.title,
          imageUrl: processedRekkData.image,
          description: messageValue,
          tags: [],
          artist: processedRekkData.artist || '',
          location: processedRekkData.location || ''
        };
      } else {
        rekkData = {
          category: chosenCategory,
          usernames: recommendeeList,
          url: chosenUrl,
          wager: wagerValue,
          title: chosenTitle,
          imageUrl: chosenImage,
          description: messageValue,
          tags: chosenTags,
          artist: chosenArtist || '',
          location: chosenLocation || ''
        };
      }
      sendRecommendation(rekkData, setRecommendationSent);
    }
  };

  if (rekkFromApp) {
    return (
      <>
        <Navbar userSession={props.userSession} pageTitle="New Rekk" />
        <Notification setShowNotification={setRecommendationSent} content={{ title: 'Success', text: `${recommendeeList[0]} has been recommended!`, show: recommendationSent }} />
        <div className={styles.rekk_form_container}>
          {receivedRekkData ? (
            <div className={styles.rekkcard}>
              <div className={`${styles.category_badge} ${styles[processedRekkData.category]}`}></div>
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
          ) : (
            <div className={styles.rekkcard}>
              <img width={100} src="/icons/loading.svg" alt="" />
            </div>
          )}
          <br />
          <div className={styles.rekk_form_inputs}>
            <textarea onChange={(e) => setMessageValue(e.target.value)} placeholder="Type a message (optional) ..." />
            <Spacer value="10px" />
            How much will they like it?
            <Spacer value="10px" />
            <div className={styles.slider_container}>
              <input type="range" min="50" max="100" defaultValue="50" className="slider" id="myRange" onChange={(e) => setWagerValue(parseInt(e.target.value))} />
              <div style={{ textAlign: 'right' }}>{wagerValue}</div>
            </div>
          </div>
          Who to recommend?
          <div style={{ height: '10px' }}></div>
          <div className={styles.friends_container}>
            {friendList?.map((friend, i) => (
              <div className={styles.friend_container} key={i}>
                <button className="clear-btn" onClick={() => toggleRecommendee(friend.username)} style={{ position: 'relative' }}>
                  <img width="50" src={friend.imageUrl} alt="" style={{ borderRadius: '50%' }} />
                  <img width="50" src="/icons/check.svg" alt="" className={`${styles.overlay_img} ${recommendeeList.includes(friend.username) ? styles.show : ''}`} />
                </button>
                <br />
                <span>{friend.firstName}</span>
              </div>
            ))}
            {friendList.length === 0 && <div className={styles.add_friend_msg_container}>Add your friends to recommend something to them!</div>}
          </div>
          <br />
          {recommendeeList.length > 0 && (
            <button className={styles.recommend_btn} onClick={triggerSendRekk}>
              Recommend
              <img width="20" src="/icons/like-dark.svg" alt="" style={{ paddingLeft: '10px' }} />
            </button>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar userSession={props.userSession} pageTitle="New Rekk" />
        <Notification setShowNotification={setRecommendationSent} content={{ title: 'Success', text: `${recommendeeList[0]} has been recommended!`, show: recommendationSent }} />
        <div className={styles.rekk_form_container}>
          <div className={styles.rekk_form_inputs}>
            <select defaultValue="choose" className={styles.select} onBlur={(e) => setChosenCategory(e.currentTarget.value)} name="category" id="category">
              <option value="choose">Choose a category*</option>
              <option value="music">Music</option>
              <option value="tv">TV</option>
              <option value="book">Book</option>
              <option value="product">Product</option>
              <option value="recipe">Recipe</option>
              <option value="restaurant">Restaurant</option>
              <option value="other">Other</option>
            </select>
            <Spacer />
            <StringInput config={{ name: 'url', type: 'text', placeholder: 'URL' }} updateFunc={setChosenUrl} />
            <Spacer />
            <StringInput config={{ name: 'title', type: 'text', placeholder: 'Title*' }} updateFunc={setChosenTitle} />
            <Spacer />
            {chosenCategory === 'music' && (
              <>
                <StringInput config={{ name: 'artist', type: 'text', placeholder: 'Artist*' }} updateFunc={setChosenArtist} />
                <Spacer />
              </>
            )}
            <textarea onChange={(e) => setMessageValue(e.target.value)} placeholder="Send a message..." />
            <Spacer />
            <input type="file" />
            <Spacer value="10px" />
            How much will they like it?*
            <Spacer value="10px" />
            <div className={styles.slider_container}>
              <input type="range" min="0" max="50" defaultValue="0" className="slider" id="myRange" onChange={(e) => setWagerValue(parseInt(e.target.value))} />
              <div style={{ textAlign: 'right' }}>{wagerValue}</div>
            </div>
          </div>
          Who to recommend?*
          <div style={{ height: '10px' }}></div>
          <div className={styles.friends_container}>
            {friendList?.map((friend, i) => (
              <div className={styles.friend_container} key={i}>
                <button className="clear-btn" onClick={() => toggleRecommendee(friend.username)} style={{ position: 'relative' }}>
                  <img width="50" src={friend.imageUrl} alt="" style={{ borderRadius: '50%' }} />
                  <img width="50" src="/icons/check.svg" alt="" className={`${styles.overlay_img} ${recommendeeList.includes(friend.username) ? styles.show : ''}`} />
                </button>
                <br />
                <span>{friend.firstName}</span>
              </div>
            ))}
            {friendList.length === 0 && <div className={styles.add_friend_msg_container}>Add your friends to recommend something to them!</div>}
          </div>
          <br />
          {recommendeeList.length > 0 && (
            <button className={styles.recommend_btn} onClick={triggerSendRekk}>
              Recommend
              <img width="20" src="/icons/like-dark.svg" alt="" style={{ paddingLeft: '10px' }} />
            </button>
          )}
        </div>
      </>
    );
  }
};

export default Rekk;
