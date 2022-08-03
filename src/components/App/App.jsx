import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from '../Title/Title';
import Divider from '../Divider/Divider';
import PageNav from '../PageNav/PageNav';
import HeroCardBox from '../HeroCardBox/HeroCardBox';
import './app.css';

function App() {
  return (
    <div className='appBox'>
      <BrowserRouter>
        <Title />
        <Divider />
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <PageNav />
                <HeroCardBox />
              </>
            }
          />
          <Route path='new-hero' element={<div>New user</div>} />
          <Route path='show-hero' element={<div>Random hero</div>} />
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
