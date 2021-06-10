import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <div id='ProfileArea'>
      <button id='ProfileButton' onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <p className="profileInfo">{user.fullName}</p>
          <p className="profileInfo">{user.emailAddress}</p>
          <p className="profileInfo">{user.Biography}</p>
          <button onClick={logout} id="logoutButton">Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;

<i class="far fa-grin-beam"></i>
