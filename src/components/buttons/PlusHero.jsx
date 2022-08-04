import React from 'react';
import { Link } from 'react-router-dom';
import plusIcon from '../../images/icon-plus.png';
import './buttons-style.css';

const PlusHero = () => {
    return(
        <div className='plusHero'>
            <Link to='/new-hero'>
                <img className='plusHeroImg' src={plusIcon} alt="add new hero" />
            </Link>
        </div>
    );
}

export default PlusHero;
