import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from '../Title/Title';
import Divider from '../Divider/Divider';
import PageNav from '../PageNav/PageNav';
import HeroCardBox from '../HeroCardBox/HeroCardBox';
import HeroPage from '../HeroPage/HeroPage';
import NewHeroPage from '../NewHeroPage/NewHeroPage';
import Context from '../../storage/context';
import './app.css';

const basicPagePosition = {
  current: 0,
  max: 0,
}

function App() {
  const [heroesData, setHeroesData] = useState([]);
  const [getHeroes, setGetHeroes] = useState(true);
  const [pagePosition, setPagePosition] = useState(basicPagePosition);
  const contextVal = {
    heroesData: {
      heroesData,
      setHeroesData,
    },
    setGetHeroes,
    pagePosition: {
      pagePosition,
      setPagePosition,
    }
  }

  useEffect(() => {
    if(getHeroes) {
      fetch('http://localhost:3001/getHeroesData')
      .then(res => res.json())
      .then(result => {
        setHeroesData(result);
        console.log(result);
        let additionalPage = 0;
        const rest = result.length % 5;
        if((result.length > 4) && (rest > 0)) additionalPage = 1;
        setPagePosition({
          current: 1,
          max: Math.trunc(result.length / 5) + additionalPage,
        })
      })
      .catch(err => setHeroesData([]))
      setGetHeroes(false);
    }
  }, [getHeroes]);

  return (
    <div className='appBox'>
      <Context.Provider value={ contextVal } >
        <BrowserRouter>
          <Title />
          <Divider />
          <Routes>
            <Route 
              path='/' 
              element={
                <>
                  <PageNav pages={pagePosition} />
                  <HeroCardBox heroesData={heroesData} pagePosition={pagePosition} />
                </>
              }
            />
            <Route path='/new-hero' element={<NewHeroPage updateHeroes={setGetHeroes} />} />
            <Route path='/show-hero' element={<div>Please, choose right hero</div>} />
            <Route path='/show-hero/:heroId' element={<HeroPage />} />
            <Route path='*' element={<div>Not found</div>} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
