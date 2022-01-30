import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';

const Notifications = (props): React.ReactNode => {
  const [allNotifications, setAllNotifications] = useState([]);
  // useEffect(() => {
  //   if (document) {
  //     getAllNotifications(setAllNotifications);
  //   }
  // }, []);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="" />
      <div className="user-page-container"></div>
    </>
  );
};

export default Notifications;
