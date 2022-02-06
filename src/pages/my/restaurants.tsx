import React from 'react';
import Navbar from '../../components/common/Navbar';

const UserPage = (props): React.ReactNode => {
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Restaurant Reks" />
    </>
  );
};

export default UserPage;
