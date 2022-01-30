import React from 'react';
import Navbar from '../components/common/Navbar';

const About = (): React.ReactNode => {
  return (
    <>
      <Navbar userSession={null} pageTitle="About" />
      <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} width="220" height="110" src="/logos/Rekkme_LinearLogoLM.svg" alt="logo" />
      <div style={{ textAlign: 'left', padding: '35px' }}>
        <span style={{ color: '#AE919A', fontSize: '25px' }}>
          <b>Mission</b>
        </span>
        <br />
        <div
          style={{
            fontStyle: 'normal',
            fontSize: '20px'
          }}>
          {`Have you ever opened up Netflix and wondered what to watch, or visited a new city and had to scroll through hundreds of text messages to find a restaurant that was highly recommended by a friend?`}
        </div>
        <div style={{ height: '30px' }}></div>
        <span style={{ color: '#AE919A', fontSize: '25px' }}>
          <b>Motivation</b>
        </span>
        <br />
        <div
          style={{
            fontStyle: 'normal',
            fontSize: '20px'
          }}>{`Rekkme is a convenient way to share personalized recommendations with friends and family, and prove who has the best taste in pretty much anything!`}</div>
      </div>
    </>
  );
};

export default About;
