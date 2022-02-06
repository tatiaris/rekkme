import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { login, navigatePath } from '../components/Helper';
import Spacer from '../components/ui/Spacer';
import styles from '../components/ui/styles/pages/signup.module.css';

const Login = ({ userSession }): React.ReactNode => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  // show nothing if userSession has not loaded yet
  if (userSession && userSession['id'] === '0') return <></>;
  // redirect to home if user is already logged in
  if (userSession && userSession['id'] !== '0') navigatePath('/');
  else {
    return (
      <>
        <Navbar userSession={userSession} pageTitle="Log In" />
        <div className={styles.bg_container}></div>
        <div className={styles.signup_page_container}>
          <div className={styles.signup_form_container}>
            <form onSubmit={(e) => login(e, username, password, setLoginFailed)}>
              Username
              <input type="text" placeholder="johndoe" name="username" onChange={(e) => setUsername(e.target.value)} />
              <Spacer value="10px" />
              Password
              <input type="password" placeholder="123" name="password" onChange={(e) => setPassword(e.target.value)} />
              {loginFailed && (
                <div>
                  <Spacer />
                  <span className={styles.err_msg}>&#9888; Wrong username or password</span>
                </div>
              )}
              <Spacer value="15px" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
