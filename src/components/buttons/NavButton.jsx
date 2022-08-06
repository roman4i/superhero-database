import React, { useContext, useEffect, useState } from 'react';
import disabledLeft from '../../images/nav/left-arrow-dis.png';
import enabledLeft from '../../images/nav/left-arrow-act.png';
import disabledRight from '../../images/nav/right-arrow-dis.png';
import enabledRight from '../../images/nav/right-arrow-act.png';
import './buttons-style.css';
import Context from '../../storage/context';

const NavButton = ({ role, enabled }) => {
    const [buttonSrc, setButtonSrc] = useState(role === 'left' ? disabledLeft : disabledRight);
    const contextData = useContext(Context);
    const {pagePosition, setPagePosition} = contextData.pagePosition;

    const changePage = () => {
        if(enabled && (pagePosition.current < pagePosition.max) && role === 'right') {
            setPagePosition(old => ({...old, current: old.current + 1}));
        }
        if(enabled && (pagePosition.current > 1) && role === 'left') {
            setPagePosition(old =>( {...old, current: old.current - 1}));
        }
    }

    useEffect(() => {
        if(role === 'left') {
            enabled ? setButtonSrc(enabledLeft) : setButtonSrc(disabledLeft);
        }
        if(role === 'right') {
            enabled ? setButtonSrc(enabledRight) : setButtonSrc(disabledRight);
        }
    }, [enabled]);

    return(
        <img
            className='navButton'
            src={ buttonSrc } 
            alt={ role === 'left' ? 'leftNav' : 'rightNav' }
            onClick={ changePage }
        />
    );
}

export default NavButton;
