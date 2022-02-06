import { useRouter } from 'next/router';
import React, { useLayoutEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { circularText, getReksFromMe } from '../../components/Helper';
import RekkFromCard from '../../components/ui/RekkFromCard';
import styles from '../../components/ui/styles/pages/profile.module.css';

const UserPage = (props): React.ReactNode => {
  const router = useRouter();
  const { username } = router.query;
  const user = props.userSession;
  const [selectedTab, setSelectedTab] = useState('for-you');
  const [reksFromMe, setReksFromMe] = useState([]);

  useLayoutEffect(() => {
    if (document) {
      circularText(user?.firstName || '', 120, 0, 90);
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
        <div className={styles.profile_page_container}>
          <div className={styles.profile_section}>
            <div className={styles.profile_pic_container}>
              <div className="circleText">
                <img src={user?.imageUrl} alt="" />
              </div>
            </div>
            <div className={styles.points_container}>
              <div className={styles.points_title}>{user?.rekPoints}</div>
              <div>points</div>
            </div>
          </div>
          <div className={styles.rekk_tabs_container}>
            <div className={styles.tabs_nav_container}>
              <div className={`${styles.tab_nav_item} ${selectedTab == 'for-you' ? styles.selected : ''}`}>
                <button onClick={() => setSelectedTab('for-you')}>FOR YOU</button>
              </div>
              <div className={`${styles.tab_nav_item} ${selectedTab == 'from-you' ? styles.selected : ''}`}>
                <button onClick={() => setSelectedTab('from-you')}>FROM YOU</button>
              </div>
            </div>
            <div className={`${styles.profile_reks_container} ${selectedTab == 'for-you' ? styles.selected : ''}`}>
              <div className={styles.profile_categories_container}>
                <div className={styles.category_container}>
                  <a href="/my/music">
                    <div className="circleText">
                      <img width="100" src="/badges/MusicBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className={styles.category_container}>
                  <a href="/my/tv">
                    <div className="circleText">
                      <img width="100" src="/badges/TVBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className={styles.category_container}>
                  <a href="/my/books">
                    <div className="circleText">
                      <img width="100" src="/badges/BookBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className={styles.category_container}>
                  <a href="/my/products">
                    <div className="circleText">
                      <img width="100" src="/badges/ProductBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className={styles.category_container}>
                  <a href="/my/restaurants">
                    <div className="circleText">
                      <img width="100" src="/badges/RestaurantBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className={styles.category_container}>
                  <a href="/my/recipes">
                    <div className="circleText">
                      <img width="100" src="/badges/RecipeBadge.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className={styles.category_container}>
                  <a href="/my/travel">
                    <div className="circleText">
                      <img width="100" src="/badges/TravelBadge.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={`profile-reks-container from-you-container ${selectedTab == 'from-you' ? 'selected' : ''}`}>
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
