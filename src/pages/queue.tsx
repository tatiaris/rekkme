import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getQueue } from '../components/Helper';
import QueueCard from '../components/ui/Queuecard';

interface FeedProps {
  userSession: any;
}
const Queue = (props): React.ReactNode => {
  const [queueList, setQueue] = useState<Array<any>>([]);

  useEffect(() => {
    if (window) {
      getQueue(setQueue);
    }
  }, []);
  console.log(props.userSession);
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Queue" />
      <div className="feed-container">
        {queueList.map((queueItem, i) => (
          <QueueCard content={queueItem} order={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default Queue;
