import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getRekActivity } from '../components/Helper';
import RekkCard from '../components/ui/Rekkcard';

interface FeedProps {
  userSession: any;
}
const Feed = (props): React.ReactNode => {
  const [rekFeed, setRekFeed] = useState([]);

  useEffect(() => {
    getRekActivity(setRekFeed);
  }, []);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Community" />
      <div className="feed-container">
        {/* {rekFeed?.map((rek: any, i: number) => (
          <RekkCard content={rek} key={i} />
        ))} */}
      </div>
    </>
  );
};

export default Feed;
