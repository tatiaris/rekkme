import React, { useState } from 'react';
import { getQuerySearchResults, logout, navigatePath } from '../../Helper';
import { config } from '../../config';
import styles from './Navbar.module.css';

/**
 * Navbar component
 */
interface NavbarProps {
  userSession: any;
  pageTitle?: string;
}
export const Navbar: React.FC<NavbarProps> = (props): React.ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const openSeachField = (): void => {
    setSearchActive(!searchActive);
  };

  const updateSearchQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    if (query.length > 2) {
      getQuerySearchResults(query, setSearchResults);
    } else {
      setSearchResults([]);
    }
  };

  const sessionActive = props.userSession && props.userSession['id'] !== '0';
  // [
  //   {
  //       "userId": "d62d2fff-921c-45bd-a8a6-8d5472dedb74",
  //       "username": "tatiaris",
  //       "firstName": "Rishabh",
  //       "lastName": "Tatia",
  //       "email": "rishabhtatia10104@gmail.com",
  //       "rekPoints": 0,
  //       "kos": 0,
  //       "imageUrl": "nullguy-1.png",
  //       "lastLogin": "2022-02-07 01:09"
  //   }
  // ]
  return (
    <div className={`${styles.navbar} flex-middle`}>
      <div className={`${styles.left_container} vertical-center`}>
        <a href="/" className="wrapper vertical-center">
          <img src={config.small_logo} alt="logo" />
        </a>
        <span className={`${styles.page_title} ${styles.two}`}>{props.pageTitle}</span>
        <div className={`${styles.search_functionality_container} ${searchActive ? styles.search_active : ''}`}>
          <div className={`${styles.nav_search_container}`}>
            <button onClick={openSeachField} className={`${styles.search_inp_container} ${styles.one} icon-btn vertical-center`} style={{ marginLeft: '10px' }}>
              <img src="/icons/search.svg" alt="" />
            </button>
            <input onChange={updateSearchQuery} className={`${styles.search_inp_1}`} type="text" placeholder="People" />
          </div>
          <div className={`${styles.search_results_container} ${searchResults.length > 0 ? styles.results_available : ''}`} style={{ height: `${searchResults.length * 71}px` }}>
            {searchResults.map((result, index) => (
              <a href={`/u/${result.username}`} key={index} className={`${styles.search_result}`}>
                <div className={`${styles.search_result_img_container}`}>
                  <img src={result.imageUrl} alt="" />
                </div>
                <div className={`${styles.search_result_text_container}`}>
                  <div className={`${styles.search_result_name}`}>{`${result.firstName} ${result.lastName}`}</div>
                  <div className={`${styles.search_result_username}`}>@{result.username}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-center ${styles.page_title} ${styles.one} ${searchActive ? styles.search_active : ''}`}>{props.pageTitle}</div>
      <div className={`${styles.right_container} vertical-center`}>
        <div className={`${styles.search_inp_container} ${styles.two}`}>
          <img src="/icons/search.svg" alt="" />
          <input type="text" placeholder="People" />
        </div>
        <button onClick={() => setShowMenu(true)} className="icon-btn vertical-center">
          <img src="/icons/hamburger.svg" alt="" />
        </button>
      </div>
      <div className={`${styles.hamburger_menu} ${showMenu ? styles.show : ''}`}>
        <div className={styles.close_btn_container} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="icon-btn" onClick={() => setShowMenu(false)}>
            <img src="/icons/close.svg" alt="" />
          </button>
        </div>
        {sessionActive && <a href={`/u/${props.userSession.username}`}>My Rekks</a>}
        {sessionActive && <a href={`/queue`}>Queue</a>}
        <a href="/">Community</a>
        <a href="/leaderboard">Leaderboards</a>
        <a href="/discover">Discover</a>
        {sessionActive && <a href="/notifications">Notifications</a>}
        {!sessionActive && <a href="/login">Log In</a>}
        {!sessionActive && <a href="/signup">Sign Up</a>}
        {sessionActive && <button onClick={() => logout()}>Log Out</button>}
        <br />
        <a href="/">
          <img className={styles.menu_logo} src="/logos/logoBig.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
