import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { circularText, getReksToMe, getReksFromMe } from '../../components/Helper';
import RekkFromCard from '../../components/ui/RekkFromCard';

const UserPage = (props): React.ReactNode => {
  const router = useRouter();
  const { username } = router.query;
  const user = props.userSession;
  const [selectedTab, setSelectedTab] = useState('for-you');
  const [reksToMe, setReksToMe] = useState([]);
  const [reksFromMe, setReksFromMe] = useState([]);

  useLayoutEffect(() => {
    if (document) {
      circularText(user?.firstName || '', 100, 0);
      getReksToMe(setReksToMe);
      getReksFromMe(setReksFromMe);
    }
  }, [user]);

  if (username == user?.username) {
    const reksFromMeList = reksFromMe.map((rek, i) => (
      <>
        <RekkFromCard content={rek} key={i} />
      </>
    ));
    return (
      <>
        <Navbar userSession={props.userSession} pageTitle="" />
        <div className="user-page-container">
          <div className="personal-section">
            <div className="profile-pic-container">
              <div className="circTxt">
                <img width="180" src={user?.imageUrl} alt="" />
              </div>
            </div>
            <div className="points-container">
              <div className="points-title">{user?.rekPoints}</div>
              <div>points</div>
            </div>
          </div>
          <div className="rekk-tabs-container">
            <div className="tabs-nav-container">
              <div className={`tab-nav-item ${selectedTab == 'for-you' ? 'selected' : ''}`}>
                <button onClick={() => setSelectedTab('for-you')}>FOR YOU</button>
              </div>
              <div className={`tab-nav-item ${selectedTab == 'from-you' ? 'selected' : ''}`}>
                <button onClick={() => setSelectedTab('from-you')}>FROM YOU</button>
              </div>
            </div>
            <div className={`profile-reks-container ${selectedTab == 'for-you' ? 'selected' : ''}`}>
              <div className="profile-categories-container">
                <div className="category-container">
                  <a href="/my/music">
                    <div className="circTxt">
                      <img width="100" src="/badges/MusicBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="category-container">
                  <a href="/my/tv">
                    <div className="circTxt">
                      <img width="100" src="/badges/TVBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="category-container">
                  <a href="/my/books">
                    <div className="circTxt">
                      <img width="100" src="/badges/BookBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="category-container">
                  <a href="/my/products">
                    <div className="circTxt">
                      <img width="100" src="/badges/ProductBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="category-container">
                  <a href="/my/restaurants">
                    <div className="circTxt">
                      <img width="100" src="/badges/RestaurantBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="category-container">
                  <a href="/my/recipes">
                    <div className="circTxt">
                      <img width="100" src="/badges/RecipeBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="category-container">
                  <a href="/my/travel">
                    <div className="circTxt">
                      <img width="100" src="/badges/TravelBadge.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={`profile-reks-container ${selectedTab == 'from-you' ? 'selected' : ''}`}>
              <>{reksFromMeList}</>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default UserPage;
