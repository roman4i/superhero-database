import React from 'react';
import { Link } from 'react-router-dom';
import './title.css';

const Title = () => {
  return(
    <Link className='titleLink' to='/'>
      <h1 className="title">Superhero database</h1>
    </Link>
  );
}

export default Title;
