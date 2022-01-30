import React, { useState } from 'react';
import { logout, navigatePath } from '../Helper';
import { config } from '../config';

/**
 * Navbar component
 */
interface NavbarProps {
  userSession: any;
  pageTitle?: string;
}
export const Navbar: React.FC<NavbarProps> = (props): React.ReactElement => {
  const [showMenu, setShowMenu] = useState(false);

  let sessionOptions = <></>;
  if (props.userSession && props.userSession['id'] !== '0') {
    sessionOptions = (
      <button onClick={() => logout()} className="flat">
        Logout
      </button>
    );
  } else if (!props.userSession) {
    sessionOptions = (
      <div>
        <button onClick={() => navigatePath('/login')} className="flat">
          Login
        </button>{' '}
        <button onClick={() => navigatePath('/signup')} className="flat">
          Signup
        </button>
      </div>
    );
  }

  const openSeachField = (): void => {
    console.log('open search field');
  };

  if (showMenu) {
    if (props.userSession && props.userSession['id'] !== '0') {
      return (
        <div className="hamburger-menu">
          <div className="close-btn-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="icon-btn" onClick={() => setShowMenu(false)}>
              <img width={40} height={40} src="/icons/close.svg" alt="" />
            </button>
          </div>
          <a href={`/u/${props.userSession.username}`}>My Rekks</a>
          <a href={`/queue`}>Queue</a>
          <a href="/">Community</a>
          <a href="/leaderboard">Leaderboards</a>
          <a href="/discover">Discover</a>
          <a href="/notifications">Notifications</a>
          <a href="/logout">Log Out</a>
          <br />
          <br />
          <a href="/">
            <img width="250" src="/logos/logoBig.svg" alt="" />
          </a>
        </div>
      );
    } else {
      return (
        <div className="hamburger-menu">
          <div className="close-btn-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="icon-btn" onClick={() => setShowMenu(false)}>
              <img width={40} height={40} src="/icons/close.svg" alt="" />
            </button>
          </div>
          <a href="/">Community</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/discover">Discover</a>
          <a href="/login">Log In</a>
          <a href="/signup">Sign Up</a>
          <br />
          <br />
          <a href="/">
            <img width="250" src="/logos/logoBig.svg" alt="" />
          </a>
        </div>
      );
    }
  }

  return (
    <div className="navbar flex-between">
      <div className="vertical-center" style={{ width: '75px' }}>
        <a href="/" className="vertical-center" style={{ fontSize: '1.25rem', color: 'white', textDecoration: 'none' }}>
          <img width={30} height={30} src={config.small_logo} alt="logo" />
        </a>
        <button onClick={openSeachField} className="icon-btn vertical-center" style={{ paddingLeft: '10px' }}>
          <img width={30} height={30} src="/icons/search.svg" alt="" />
        </button>
      </div>
      <div className="flex-center page-title">{props.pageTitle}</div>
      <div style={{ width: '75px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => setShowMenu(true)} className="icon-btn vertical-center">
          <img width={30} height={30} src="/icons/hamburger.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
