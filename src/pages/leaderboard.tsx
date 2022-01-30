import React from 'react';
import Navbar from '../components/common/Navbar';

const Leaderboard = (props): React.ReactNode => {
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Leaderboard" />
      <div className="leaderboard-container"></div>
    </>
  );
};

export default Leaderboard;
