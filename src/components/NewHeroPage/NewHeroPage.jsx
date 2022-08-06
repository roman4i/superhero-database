import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './new-hero-page-style.css';

const basicModel = {
  real_name: '',
  nickname: '',
  origin_description: '',
  superpowers: '',
  catch_phrase: '',
  images: [],
}

const NewHeroPage = ({ updateHeroes }) => {
  const [newHeroData, setNewHeroData] = useState({...basicModel});
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const setNewValue = (valName, val) => {
    setNewHeroData(old => {
      return {
        ...old,
        [valName]: val,
      }
    });
  }

  const resetNewHeroData = () => {
    setErrorText('');
    setNewHeroData(basicModel);
  }

  const onDataChange = (event) => {
    setErrorText('');

    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'real_name': {
        setNewValue('real_name', value)
        break;
      }

      case 'nickname': {
        setNewValue('nickname', value);
        break;
      }

      case 'origin_description': {
        setNewValue('origin_description', value);
        break;
      }

      case 'superpowers': {
        setNewValue('superpowers', value);
        break;
      }

      case 'catch_phrase': {
        setNewValue('catch_phrase', value);
        break;
      }
    
      default: {
        console.log('Something wrong with newHero state');
        break;
      }
    }
  }

  const checkSubmit = (event) => {
    event.preventDefault();

    let generateError = false;

    for(const key in newHeroData) {
      if(key !== 'images') {
        if(newHeroData[key] === '') {
          generateError = true;
          setErrorText(key + ' is empty!');
        }
      }
    }

    if(!generateError) {
      setErrorText('Sending data ...');
      fetch('http://localhost:3001/newHero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...newHeroData})
      })
      .then(resp => {
        if(resp.status > 199 && resp.status < 300) {
          setErrorText('Soccefully sended new data');
          updateHeroes(true);
          navigate('/');
        } else {
          setErrorText('Failed to send data or hero is already exist');
        }
      })
      .catch(err => setErrorText(err.message));
    }
  }

  return(
    <form className='newHeroPageBox' onSubmit={checkSubmit} >
      <table>
        <tbody>
          <tr>
            <td className='heroRowName'>Real name</td>
            <td>
              <input 
                type="text" 
                name="real_name" 
                value={newHeroData.real_name} 
                onChange={onDataChange} 
              />
            </td>
          </tr>
          <tr>
            <td className='heroRowName'>Nickname</td>
            <td>
              <input 
                type="text" 
                name="nickname" 
                value={newHeroData.nickname} 
                onChange={onDataChange} 
              />
            </td>
          </tr>
          <tr>
            <td className='heroRowName'>Origin description</td>
            <td>
              <textarea 
                name="origin_description" 
                onChange={onDataChange} 
                value={newHeroData.origin_description}
              >
              </textarea>
            </td>
          </tr>
          <tr>
            <td className='heroRowName'>Superpowers</td>
            <td>
              <textarea 
                name="superpowers" 
                onChange={onDataChange} 
                value={newHeroData.superpowers}
              >
              </textarea>
            </td>
          </tr>
          <tr>
            <td className='heroRowName'>Catch phrase</td>
            <td>
              <textarea 
                name="catch_phrase" 
                onChange={onDataChange} 
                value={newHeroData.catch_phrase}
              >
              </textarea>
            </td>
          </tr>
          <tr>
            <td className='heroRowName'>Images</td>
            <td>
              <input 
                type="file" 
                name="file_button" 
                multiple={true}
                accept='image/*'
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className='newHeroError' >{ errorText }</div>
      <div className='newHeroControlsBox'>
        <input type="button" value="Reset" onClick={resetNewHeroData} />
        <input type="submit" value="Create" />
      </div>
    </form>
  )
}

export default NewHeroPage;
