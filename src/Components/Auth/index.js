import React, { useState } from 'react';
import createClient from './supabaseClient';
import Menu from '../Menu';

export default function Auth() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginData, setLoginData] = useState(null);
  const [loginError, setLoginError] = useState(null);

  // const [signupEmail, setSignupEmail] = useState('');
  // const [signupPassword, setSignupPassword] = useState('');
  // const [signupData, setSignupData] = useState(null);
  // const [signupError, setSignupError] = useState(null);

  // const handleSignUp = async () => {
  //   try {
  //     const truncatedEmail = signupEmail.substring(0, 255);
  
  //     const { user, error } = await createClient.auth.signUp({
  //       email: truncatedEmail,
  //       password: signupPassword,
  //     });
  //     setSignupData(user);
  //     setSignupError(error);
  //   } catch (error) {
  //     setSignupError(error.message);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const { user, error } = await createClient.auth.signIn({
        email: loginEmail,
        password: loginPassword,
      });
      setLoginData(user);
      setLoginError(error);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Log in</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Log in</button>
        {loginData && <Menu />}
        {loginError && <div>Error: {loginError.message}</div>}
      </div>

      {/* <div>
        <h1>Sign up</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
        {signupData && <div>Sign up successful! You can now log in.</div>}
        {signupError && <div>Error: {signupError.message}</div>}
      </div> */}
    </div>
  );
}