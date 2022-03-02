import { Rekk, User } from 'components/interfaces';
import FriendRequestButton from 'components/ui/FriendRequestButton';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { circularText, fetchQueryUser, getFollowingList, getFollowRequestedList, getReksFromMe } from '../../components/Helper';
import RekkFromCard from '../../components/ui/RekkFromCard';
import styles from '../../components/ui/styles/pages/profile.module.css';

const UserPage = (props): React.ReactNode => {
  const router = useRouter();
  const { username } = router.query;
  const user = props.userSession;
  const [selectedTab, setSelectedTab] = useState('for-you');
  const [reksFromMe, setReksFromMe] = useState<Rekk[]>([]);
  const [queryUser, setQueryUser] = useState<User>(null);
  const [followingList, setFollowingList] = useState<User[]>([]);
  const [followRequestedList, setFollowRequestedList] = useState<User[]>([]);

  useEffect(() => {
    if (username) {
      if (username !== user.username) {
        fetchQueryUser(username, setQueryUser);
      }
    }
  }, [username]);

  useEffect(() => {
    if (queryUser) {
      circularText(queryUser?.firstName || '', 120, 0, 90);
    }
  }, [queryUser]);

  useEffect(() => {
    if (user) {
      getFollowingList(setFollowingList);
      getFollowRequestedList(setFollowRequestedList);
      getReksFromMe(setReksFromMe);
    }
  }, []);

  if (!queryUser) {
    return <Navbar userSession={props.userSession} pageTitle="" />;
  } else {
    return (
      <>
        <Navbar userSession={props.userSession} pageTitle="" />
        <div className={styles.profile_page_container}>
          <div className={styles.profile_section}>
            <div className={styles.profile_pic_container}>
              <div className="circleText">
                <img src={queryUser?.imageUrl} alt="" />
              </div>
            </div>
            <div className={styles.points_container}>
              <div className={styles.points_title}>{queryUser?.rekPoints}</div>
              <div>Rekk Points</div>
            </div>
            <div className={`flex-center ${styles.network_data_container}`}>
              <div>
                {queryUser.numFollowers}
                <br />
                <small>Followers</small>
              </div>
              <div>
                {queryUser.numFriends}
                <br />
                <small>Friends</small>
              </div>
              <div>
                {queryUser.numFollowing}
                <br />
                <small>Following</small>
              </div>
            </div>
            <div className="flex-center">
              <FriendRequestButton
                content={{
                  followRequestedList: followRequestedList,
                  followingList: followingList,
                  currentUser: user,
                  queryUser: queryUser,
                  setFollowingList: setFollowingList,
                  setFollowRequestedList: setFollowRequestedList
                }}
              />
            </div>
          </div>
          {user.username === queryUser.username && (
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
                        <img width="100" src="/badge/music.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.category_container}>
                    <a href="/my/tv">
                      <div className="circleText">
                        <img width="100" src="/badge/tv.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.category_container}>
                    <a href="/my/books">
                      <div className="circleText">
                        <img width="100" src="/badge/book.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.category_container}>
                    <a href="/my/products">
                      <div className="circleText">
                        <img width="100" src="/badge/product.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.category_container}>
                    <a href="/my/restaurants">
                      <div className="circleText">
                        <img width="100" src="/badge/restaurant.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.category_container}>
                    <a href="/my/recipes">
                      <div className="circleText">
                        <img width="100" src="/badge/recipe.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.category_container}>
                    <a href="/my/travel">
                      <div className="circleText">
                        <img width="100" src="/badge/travel.png" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`${styles.profile_reks_container} ${styles.from_you_container} ${selectedTab == 'from-you' ? styles.selected : ''}`}>
                {reksFromMe.map((rek, i) => <RekkFromCard content={rek} key={i} />)}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default UserPage;

// {
//   "userId": "e21e31ae-b820-4630-a377-a0468445d81f",
//   "username": "danabreo",
//   "firstName": "Daniel",
//   "lastName": "Abreo",
//   "email": "abreo@tamu.edu",
//   "rekPoints": 0,
//   "kos": 0,
//   "imageUrl": "https://github.com/tatiaris/rekkme/raw/master/public/avatars/guy-1.png",
//   "lastLogin": "2022-02-08 04:08",
//   "isPublic": true,
//   "numFriends": 1,
//   "numFollowing": 1,
//   "numFollowers": 1
// }
