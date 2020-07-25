import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.scss';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <div className='landing-page__container'>
        <h2 className='landing-page__title'>Welcome to Nutrition Planner</h2>
        <div className='landing-page__bottom-container'>
          <p className='landing-page__text'>If you've always wanted to take the extra step in your fitness journey, or simply just want to gain, lose or maintain weight. Nutrition Planner is just the right fit for you! Click the button below to become the better version of yourself!</p>
          <Link className='landing-page__button' to='/nutritiontable'>Let's begin!</Link>
        </div> 
      </div>
    </div>
  )
}
