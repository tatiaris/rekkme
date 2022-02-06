import React from 'react';
import Navbar from '../../components/common/Navbar';

const UserPage = (props): React.ReactNode => {
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="TV Reks" />
    </>
  );
};

export default UserPage;
