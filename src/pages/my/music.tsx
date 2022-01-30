import React, { useLayoutEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { getReksToMe } from '../../components/Helper';

const UserPage = (props): React.ReactNode => {
  const user = props.userSession;
  const [reksToMe, setReksToMe] = useState([]);

  useLayoutEffect(() => {
    if (document) {
      getReksToMe(setReksToMe);
    }
  }, [user]);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Music Reks" />
      <div className="my-reks-container">
        {reksToMe.map((rek, i) => (
          <div className="rekkcard" key={i}>
            <div className="details-container">
              <div>
                <img width="40px" src={rek?.fromUser.imageUrl} alt="" style={{ borderRadius: '50%' }} />
              </div>
              <div style={{ width: '100%', textAlign: 'left', padding: '0 10px' }}>
                <span style={{ fontSize: '20px' }}>
                  <b>{rek?.fromUser.firstName}</b> rekked
                </span>
                <br />
                <div style={{ height: '10px' }}></div>
                <span>
                  <b>{rek?.title}</b> by <b>{rek?.artist}</b>
                </span>
                <br />
                <span style={{ fontStyle: 'italic', fontSize: '14px' }}>{rek?.description}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                {/* <span style={{ fontSize: '14px' }}>{rek.createdOn}</span> */}
                <div style={{ height: '5px' }}></div>
                <img width="80px" src={rek?.imageUrl} alt="" style={{ borderRadius: '5px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPage;
