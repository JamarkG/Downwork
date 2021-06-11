import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    // <Redirect to="/" />

    history.push('/')
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password }))

      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    history.push('/')
  }

  const demoLogin = () => {
    setCredential('demo@user.io')
    setPassword('password')
    dispatch(sessionActions.login({ credential, password }))
  }


  return (
    <div id="formHolder">
      <h2>Log in to Downwork</h2>
      <form className={'LoginForm1'} onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
          <input
            type="email"
            value={credential}
            className={"formInput"}
            placeholder="Email Address"
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            className={"formInput"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit" id="loginSubmit">Log In</button>
        <button id='demoLogin' onClick={demoLogin}>Login with Demo</button>
      </form>
    </div>
  );
}

export default LoginFormPage;
