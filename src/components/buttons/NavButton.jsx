import React from 'react';
import disabledLeft from '../../images/nav/left-arrow-dis.png';
import disabledRight from '../../images/nav/right-arrow-dis.png';
import './buttons-style.css';

const NavButton = ({ role }) => {
    return(
        <img
            className='navButton'
            src={ role === 'left' ? disabledLeft : disabledRight } 
            alt={ role === 'left' ? 'leftNav' : 'rightNav' } 
        />
    );
}

export default NavButton;
