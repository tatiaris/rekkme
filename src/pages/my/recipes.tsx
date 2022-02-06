import React from 'react';
import Navbar from '../../components/common/Navbar';

const UserPage = (props): React.ReactNode => {
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Recipes Reks" />
    </>
  );
};

export default UserPage;
