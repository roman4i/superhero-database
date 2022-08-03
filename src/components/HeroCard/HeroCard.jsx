import React from 'react';
import './hero-card.css';
import noImage from '../../images/no-image.png';

const HeroCard = () => {
    return(
        <div className='heroCard'>
            <img className='heroImage' src={ noImage } alt="hero" />
            <div>
                Nickname
            </div>
        </div>
    )
}

export default HeroCard;
