import React from 'react';
import plusIcon from '../../images/icon-plus.png';
import './buttons-style.css';

const PlusHero = () => {
    return(
        <div className='plusHero'>
            <img className='plusHeroImg' src={plusIcon} alt="add new hero" />
        </div>
    );
}

export default PlusHero;
