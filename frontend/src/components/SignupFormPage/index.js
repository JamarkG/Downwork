import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [emailAddress, setEmailAddress] = useState("");
  const [biography, setBiography] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ emailAddress, fullName, password, biography }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div id="signupFormHolder">
      <h2 id="getFreeAccount">Get your free account</h2>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <form onSubmit={handleSubmit} id="signupForm">
        <input
          type="email"
          value={emailAddress}
          className={"signupInput"}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder={'Email Address'}
          required
        />
        <input
          type="text"
          value={fullName}
          className={"signupInput"}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={'Full Name'}
          required
        />
        <input
          type="password"
          value={password}
          className={"signupInput"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={'Password'}
          required
        />
        <input
          type="password"
          value={confirmPassword}
          className={"signupInput"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder={'Confirm Password'}
          required
        />
        <textarea value={biography}
          className={"signupInput"}
          id={"bioInput"}
          onChange={(e) => setBiography(e.target.value)}
          required
          placeholder={'Write your biography here.'}>
        </textarea>
        <button type="submit" id={"signupSubmit"}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormPage;
