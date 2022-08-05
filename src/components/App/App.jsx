import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from '../Title/Title';
import Divider from '../Divider/Divider';
import PageNav from '../PageNav/PageNav';
import HeroCardBox from '../HeroCardBox/HeroCardBox';
import HeroPage from '../HeroPage/HeroPage';
import NewHeroPage from '../NewHeroPage/NewHeroPage';
import './app.css';

function App() {
  const [heroesData, setHeroesData] = useState([]);
  const [getHeroes, setGetHeroes] = useState(true);

  useEffect(() => {
    if(getHeroes) {
      fetch('/getHeroesData')
      .then(res => res.json())
      .then(result => {
        setHeroesData(result);
      })
      .catch(err => setHeroesData([]))
      setGetHeroes(false);
    }
  }, [getHeroes]);

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
                <HeroCardBox heroesData={heroesData} />
              </>
            }
          />
          <Route path='/new-hero' element={<NewHeroPage updateHeroes={setGetHeroes} />} />
          <Route path='/show-hero' element={<div>Please, choose right hero</div>} />
          <Route path='/show-hero/:heroId' element={<HeroPage />} />
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
