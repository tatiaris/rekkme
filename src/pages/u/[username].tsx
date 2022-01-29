import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../../components/common/Navbar';

const UserPage = (props): React.ReactNode => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="" />
      <div className="user-page-container">
        <div className="personal-section">
          <div className="profile-pic-container">
            <img width="180" src={`https://avatars.githubusercontent.com/u/33273930?v=4`} alt="" />
          </div>
          <div className="points-container">
            <div className="points-title">246</div>
            <div>points</div>
          </div>
        </div>
        <div className="rekk-tabs-container"></div>
      </div>
    </>
  );
};

export default UserPage;
