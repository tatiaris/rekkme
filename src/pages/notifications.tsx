import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getAllNotifications } from '../components/Helper';

const Notifications = (props): React.ReactNode => {
  const [allNotifications, setAllNotifications] = useState([]);
  useEffect(() => {
    if (document) {
      getAllNotifications(setAllNotifications);
    }
  }, []);

  console.log(allNotifications);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Notifications" />
      <div className="feed-container">
        {allNotifications.map((notification: any, i: number) => (
          <div key={i} className={`all-notification-container ${notification.diff > 0 ? 'success' : ''}`}>
            <div className="all-notification-content">
              <div className="all-notification-title">
                <span>{notification.title}</span>
              </div>
              <div className="all-notification-subtitle">
                <span>{`${notification.toUser.firstName} rated it a ${notification.result}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notifications;
