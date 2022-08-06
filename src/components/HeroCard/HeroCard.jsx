import React from 'react';
import { Link } from 'react-router-dom';
import './hero-card.css';
import noImage from '../../images/no-image.png';

const HeroCard = ({ id, cardName, imgs }) => {
  return(
    <Link to={'/show-hero/' + id} >
      <div className='heroCard'>
        <img className='heroImage' src={ imgs.length === 0 ? noImage : 'http://localhost:3001/' + imgs[0]} alt="hero" />
        <div>
          { cardName }
        </div>
      </div>
    </Link>
  )
}

export default HeroCard;
