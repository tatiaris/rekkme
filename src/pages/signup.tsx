import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { navigatePath, signupUser } from '../components/Helper';
import Spacer from '../components/ui/Spacer';
import styles from '../components/ui/styles/pages/signup.module.css';

const Signup = ({ userSession }): React.ReactNode => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupFailed, setSignupFailed] = useState(false);

  const triggerSignupUser = (e) => {
    e.preventDefault();
    const signupData = {
      username: username,
      password: password,
      firstname: fname,
      lastname: lname,
      email: email
    };
    signupUser(signupData, setSignupFailed);
  };

  if (userSession && userSession['id'] === '0') return <></>;
  if (userSession && userSession['id'] !== '0') navigatePath('/');
  else {
    return (
      <>
        <Navbar userSession={userSession} pageTitle="Sign Up" />
        <div className={styles.bg_container}></div>
        <div className={styles.signup_page_container} style={{ marginTop: '50px' }}>
          <div className={styles.signup_form_container}>
            <form onSubmit={triggerSignupUser}>
              First Name
              <input type="text" placeholder="John" name="fname" onChange={(e) => setFName(e.target.value)} />
              <Spacer value="10px" />
              Last Name
              <input type="text" placeholder="Doe" name="lname" onChange={(e) => setLName(e.target.value)} />
              <Spacer value="10px" />
              Email
              <input type="text" placeholder="johndoe@gmail.com" name="email" onChange={(e) => setEmail(e.target.value)} />
              <Spacer value="10px" />
              Username
              <input type="text" placeholder="johndoe" name="username" onChange={(e) => setUsername(e.target.value)} />
              <Spacer value="10px" />
              Password
              <input type="password" placeholder="123" name="password" onChange={(e) => setPassword(e.target.value)} />
              {signupFailed && (
                <div>
                  <Spacer />
                  <span className={styles.err_msg}>&#9888; Something went wrong.</span>
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

export default Signup;
