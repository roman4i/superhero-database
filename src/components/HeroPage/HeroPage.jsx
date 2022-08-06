import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Context from '../../storage/context';
import './hero-page-style.css';

const HeroPage = () => {
  const params = useParams();
  const contextData = useContext(Context);
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(' ');
  let currHero = {};

  contextData.heroesData.heroesData.forEach(element => {
    if(element._id === params.heroId) currHero = element;
  });

  const deleteHero = () => {
    setErrorState('Trying to delete this hero ...');
    fetch('http://localhost:3001/deleteHero', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id: currHero._id}),
    })
      .then(resp => {
        if(resp.status === 200) {
          setErrorState('Hero deleted')
          contextData.setGetHeroes(true);
          navigate('/');
        } else {
          setErrorState('Can\'t delete hero')
        }
      })
      .catch(err => console.log(err.message))
  }

    return(
      <div className='heroPageBox'>
        <table>
          <tbody>
            <tr>
              <td className='heroRowName' >Nickname</td>
              <td>{currHero.nickname}</td>
            </tr>
            <tr>
              <td className='heroRowName' >Real name</td>
              <td>{currHero.real_name}</td>
            </tr>
            <tr>
              <td className='heroRowName' >Origin description</td>
              <td>{currHero.origin_description}</td>
            </tr>
            <tr>
              <td className='heroRowName' >Superpowers</td>
              <td>{currHero.superpowers}</td>
            </tr>
            <tr>
              <td className='heroRowName' >Catch phrase</td>
              <td>{currHero.catch_phrase}</td>
            </tr>
            <tr>
              <td className='heroRowName' >Images</td>
              <td>Images</td>
            </tr>
          </tbody>
        </table>
        <div>{ errorState }</div>
        <div className='heroPageButtons'>
          <input type="button" value="Delete" onClick={deleteHero} />
          <input type="button" value="Save changes" />
          <input type="button" value="Reset changes" />
        </div>
      </div>
    );
}

export default HeroPage;
