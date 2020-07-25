import React from 'react';
import './Header.scss';
import logo from '../../Assets/Logo/logo.png';
import user from '../../Assets/icons/user.svg';
import { NavLink, Link } from 'react-router-dom';

export default function Header({photoURL, signOut}) {
  return (
    <div className="nav">
      <div className="nav__logo-container">
        <Link to='/nutritiontable'>
          <img className="nav__logo" src={logo} alt="logo" />
        </Link>
        <h2 className="nav__title">Nutrition Planner</h2>
        <div className="nav__logged-user">
          <div className="nav__container-right">
            <img className="nav__user-avatar" src={photoURL || user} alt="avatar"/>
            <button className="nav__sign-out" onClick={signOut}>Sign Out</button>
          </div>
        </div>
      </div>
      <div className="nav__links">
        <NavLink className="nav__anchor" activeClassName="nav__anchor-active" to='/nutritiontable'>Nutrition Table</NavLink>
        <NavLink className="nav__anchor" activeClassName="nav__anchor-active" to="/caloriecalculator">Calorie Calculator</NavLink> 
      </div>
    </div>
  )
}
