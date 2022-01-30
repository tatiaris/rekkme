import React from 'react';
import Navbar from '../../components/common/Navbar';

const Discover = (props): React.ReactNode => {
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Music" />
      <div className="trending-container">
        <div className="rekk-container">
          <div className="rekk-title">
            <b>Lost</b> by <b>Frank Ocean</b>
          </div>
          <div className="rekk-score">{`126`}</div>
        </div>
      </div>
    </>
  );
};

export default Discover;
