import React, { useEffect, useState } from 'react';
import { NavButton } from '../buttons';
import './page-nav.css';

const basicButtonsState = {
  left: false,
  right: false,
}

const PageNav = ({ pages }) => {
  const [buttonsState, setButtonsState] = useState(basicButtonsState);

  useEffect(() => {
    let pagesData = {
      left: true,
      right: true,
    };
    if(pages.current === 1 && pages.max > 1) {
      pagesData = {
        left: false,
        right: true,
      }
    } else if(pages.current === pages.max){
      pagesData = {
        left: true,
        right: false,
      }
    }
    if(pages.max === 1) pagesData = basicButtonsState;
  
    setButtonsState(pagesData);
  },[pages])

  return(
    <div className='navBox'>
      <NavButton role = 'left' enabled={buttonsState.left} />
      <div>{pages.current}/{pages.max}</div>
      <NavButton role = 'right' enabled={buttonsState.right} />
    </div>
  );
}

export default PageNav;
