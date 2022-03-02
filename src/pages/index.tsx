import { Rekk } from 'components/interfaces';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getRekCommunity } from '../components/Helper';
import RekkCard from '../components/ui/Rekkcard';
import styles from '../components/ui/styles/pages/feed.module.css';

interface FeedProps {
  userSession: any;
}
const Feed = (props): React.ReactNode => {
  const [rekFeed, setRekFeed] = useState<Rekk[]>([]);

  useEffect(() => {
    getRekCommunity(setRekFeed);
  }, []);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Community" />
      <div className={styles.feed_container}>
        {rekFeed?.map((rek: any, i: number) => (
          <RekkCard content={rek} key={i} />
        ))}
      </div>
    </>
  );
};

export default Feed;
