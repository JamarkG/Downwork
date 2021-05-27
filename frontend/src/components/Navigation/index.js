import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import Logo from "../Images/downwork.png";
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton id='ProfileButton' user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" id="loginButton">Log In</NavLink>
        <NavLink to="/signup" id="signupButton">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='NavBar'>
      <div>
          <NavLink exact to="/">
            <img className='DownworkLogo' src={Logo} alt="Downwork logo green"/>
          </NavLink>
      </div>
      <SearchBar />
      <div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
