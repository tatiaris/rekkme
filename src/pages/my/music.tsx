import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { getReksToMe, sendRekResult } from '../../components/Helper';

const UserPage = (props): React.ReactNode => {
  const user = props.userSession;
  const [reksToMe, setReksToMe] = useState([]);
  const [currentlyJudgingRek, setCurrentlyJudgingRek] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  useLayoutEffect(() => {
    if (document) {
      getReksToMe(setReksToMe);
    }
  }, [user]);

  const submitRating = () => {
    sendRekResult(currentlyJudgingRek, ratingValue, setRatingSubmitted);
  };

  useEffect(() => {
    if (ratingSubmitted) {
      const remainingReks = reksToMe.filter((rek) => rek.rekId !== currentlyJudgingRek);
      setReksToMe(remainingReks);
      setRatingSubmitted(false);
    }
  }, [ratingSubmitted]);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Music Reks" />
      <div className="my-reks-container">
        {reksToMe.map((rek, i) => {
          if (rek.rekResult == null)
            return (
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
                    <div style={{ height: '5px' }}></div>
                    <img width="80px" src={rek?.imageUrl} alt="" style={{ borderRadius: '5px' }} />
                  </div>
                </div>
                <div className="action-btns-container">
                  {currentlyJudgingRek === rek.rekId ? (
                    <>
                      <button onClick={() => setCurrentlyJudgingRek(0)} style={{ fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Nevermind
                        <img width="20px" src="/icons/close.svg" alt="" style={{ paddingLeft: '10px' }} />
                      </button>
                    </>
                  ) : (
                    <button onClick={() => setCurrentlyJudgingRek(rek.rekId)} style={{ fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      Seen
                      <img width="20px" src="/icons/like.svg" alt="" style={{ paddingLeft: '10px' }} />
                    </button>
                  )}
                </div>
                <br />
                {currentlyJudgingRek === rek.rekId ? (
                  <>
                    <div className="slider-container">
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ width: '100%' }}>
                          <input type="range" min="0" max="100" defaultValue="0" className="slider light" id="myRange" onChange={(e) => setRatingValue(parseInt(e.target.value))} />
                          <div className="slider-value" style={{ textAlign: 'right' }}>
                            {ratingValue}
                          </div>
                        </div>
                        <button onClick={submitRating} style={{ padding: '10px', background: '#2F1C4C' }}>
                          <img width="30px" src="/icons/like.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
        })}
      </div>
    </>
  );
};

export default UserPage;
