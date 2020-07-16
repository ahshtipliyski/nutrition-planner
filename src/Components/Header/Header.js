import React from 'react';
import './Header.scss';
import logo from '../../Assets/Logo/logo.png'
import { NavLink } from 'react-router-dom';

export default function Header({displayName, photoURL, signOut}) {
  return (
    <div className="nav">
      <div className="nav__logo-container">
        <img className="nav__logo" src={logo} alt="logo" />
        <h2>Nutrition Planner</h2>
      </div>
      <div className="nav__links">
        <NavLink to='/nutritiontable'>Nutrition Table</NavLink>
        <NavLink to="/caloriecalculator">Calorie Calculator</NavLink> 
      </div>
      <div className="nav__logged-user">
        <p>{displayName}</p>
        <img src={photoURL} alt="avatar"/>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  )
}
