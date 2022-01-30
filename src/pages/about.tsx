import React from 'react';
import Navbar from '../components/common/Navbar';

const About = (): React.ReactNode => (
  <>
    <Navbar userSession={null} pageTitle="About" />
    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} width="220" height="110" src="/logos/Rekkme_LinearLogoLM.svg" alt="logo" />
    <div style={{ textAlign: 'left', padding: '35px' }}>
      <span style={{ color: '#AE919A', fontSize: '25px' }}>
        <b>Motivation</b>
      </span>
      <br />
      <div
        style={{
          fontStyle: 'normal',
          fontSize: '20px'
        }}
      >
        {`Have you ever gotten tired of skimming through Netflix, looking for something to watch? Or visited a new city and had to search hundreds of texts to find a restaurant that was highly recommended by a friend? Maybe you've found the perfect album for a friend, but know they'll forget to listen if they're not reminded.`}
      </div>
      <div style={{ height: '30px' }}></div>
      <span style={{ color: '#AE919A', fontSize: '25px' }}>
        <b>Mission</b>
      </span>
      <br />
      <div
        style={{
          fontStyle: 'normal',
          fontSize: '20px'
        }}
      >{`Rekkme is a personalized recommendation app that makes it easy to share recommendations and compete with your friends to see who has the best taste!`}</div>
    </div>
  </>
);

export default About;
