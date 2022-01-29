import React, { useState } from 'react';
import { navigatePath, signupUser } from '../components/Helper';
import Spacer from '../components/ui/Spacer';
import StringInput from '../components/ui/StringInput';

const Signup = ({ userSession }): React.ReactNode => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupFailed, setSignupFailed] = useState(false);

  const triggerSignupUser = () => {
    signupUser({ email, fname, lname, username }, password, setSignupFailed);
  };

  if (userSession && userSession['id'] === '0') return <></>;
  if (userSession && userSession['id'] !== '0') navigatePath('/');
  else {
    return (
      <div style={{ padding: '15px' }}>
        <StringInput config={{ name: 'fname', label: 'First Name', type: 'text', placeholder: 'John' }} updateFunc={setFName} />
        <Spacer />
        <StringInput config={{ name: 'lname', label: 'Last Name', type: 'text', placeholder: 'Doe' }} updateFunc={setLName} />
        <Spacer />
        <StringInput config={{ name: 'email', label: 'E-mail', type: 'text', placeholder: 'johndoe@gmail.com' }} updateFunc={setEmail} />
        <Spacer />
        <StringInput config={{ name: 'username', label: 'Username', type: 'text', placeholder: 'jdoe' }} updateFunc={setUsername} />
        <Spacer />
        <StringInput config={{ name: 'password', label: 'Password', type: 'password', placeholder: 'johndoe123' }} updateFunc={setPassword} />
        {signupFailed && (
          <div>
            <Spacer />
            <span className="err-msg">Signup failed</span>
          </div>
        )}
        <Spacer value="8px" />
        <button onClick={triggerSignupUser}>Submit</button>
      </div>
    );
  }
};

export default Signup;
