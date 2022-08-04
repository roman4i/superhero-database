import React from 'react';
import { NavButton } from '../buttons';
import './page-nav.css';

const PageNav = () => {
  return(
    <div className='navBox'>
      <NavButton role = 'left' />
      <div>Page number</div>
      <NavButton role = 'right' />
    </div>
  );
}

export default PageNav;
