import React from 'react';
import { Link } from 'react-router-dom';
import './hero-card.css';
import noImage from '../../images/no-image.png';

const HeroCard = () => {
  return(
    <Link to='/show-hero' >
      <div className='heroCard'>
        <img className='heroImage' src={ noImage } alt="hero" />
        <div>
          Nickname
        </div>
      </div>
    </Link>
  )
}

export default HeroCard;
