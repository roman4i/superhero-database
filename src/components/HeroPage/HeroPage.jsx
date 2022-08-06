import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Context from '../../storage/context';
import inputSwitch from '../../utils/inputSwitch';
import './hero-page-style.css';

const defaultEdit = {
  nickname: false,
  real_name: false,
  origin_description: false,
  superpowers: false,
  catch_phrase: false,
}

const HeroPage = () => {
  const params = useParams();
  const contextData = useContext(Context);
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(' ');
  const [edit, setEdit] = useState(defaultEdit);
  const [disableSave, setDisableSave] = useState(true);
  const [sendFiles, setSendFiles] = useState(null);
  let currHero = {};

  contextData.heroesData.heroesData.forEach(element => {
    if(element._id === params.heroId) {
      currHero = element;
    }
  });

  const [changedData, setChangedData] = useState(currHero)


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

  const setEditValue = (valName, val) => {
    setEdit(old => {
      return {
        ...old,
        [valName]: val,
      }
    })
  }

  const changeIsEdit = (e) => {
    const name = e.target.name;
    const val = !edit[name];

    inputSwitch(name, val, setEditValue);
  }

  const setNewValue = (valName, val) => {
    setChangedData(old => {
      return {
        ...old,
        [valName]: val,
      }
    })
  }

  const onInputChange = (e) => {
    const {value, name} = e.target;

    setDisableSave(false);

    inputSwitch(name, value, setNewValue);
  }

  const resetData = () => {
    setDisableSave(true);
    setChangedData(currHero);
    setSendFiles(null);
  }

  const onSave = () => {
    setErrorState('trying to send update ...')
    fetch('http://localhost:3001/updateHero', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changedData),
    })
    .then(resp => {
      if(resp.status > 199 && resp.status < 300) {
        contextData.setGetHeroes(true);
        setErrorState('Soccefully sended new data');
        navigate('/');
      } else {
        setErrorState('Failed to send new data');
      }
    })
    .catch(err => setErrorState(err.message));

    if(sendFiles !== null) {
      fetch('http://localhost:3001/uploadImage', {
        method: 'POST',
        body: sendFiles,
      })
      .catch(err => console.log(err.message))
    }
  }

  const onLoadImgs = (e) => {
    setDisableSave(false);

    let links = [];

    const filesList = new FormData();

    for(let i = 0; i < e.target.files.length; i++) {
      links.push(e.target.files[i].name);
      filesList.append('file' + i, e.target.files[i], e.target.files[i].name)
    }

    setChangedData(old => {
      return{
        ...old,
        images: old.images.concat(links),
      }
    })
    setSendFiles(filesList);
  }

    return(
      <div className='heroPageBox'>
        <table>
          <tbody>
            <tr>
              <td className='heroRowName' >Nickname</td>
              <td>{
                !edit.nickname 
                ? changedData.nickname 
                : <input type="text" 
                    name="nickname" 
                    value={changedData.nickname} 
                    onChange={onInputChange}
                  />
              }</td>
              <td className='editBtnTd'>
                <input type="button" value="Edit" name='nickname' onClick={changeIsEdit}/>
              </td>
            </tr>
            <tr>
              <td className='heroRowName' >Real name</td>
              <td>{
                !edit.real_name 
                ? changedData.real_name 
                : <input 
                    type="text" 
                    name="real_name" 
                    value={changedData.real_name} 
                    onChange={onInputChange}
                  />
              }</td>
              <td className='editBtnTd'>
                <input type="button" value="Edit" name='real_name' onClick={changeIsEdit} />
              </td>
            </tr>
            <tr>
              <td className='heroRowName' >Origin description</td>
              <td>{
                !edit.origin_description 
                ? changedData.origin_description 
                : <textarea 
                    value={changedData.origin_description} 
                    name='origin_description' 
                    onChange={onInputChange} 
                  />
              }</td>
              <td className='editBtnTd'>
                <input type="button" value="Edit" name='origin_description' onClick={changeIsEdit} />
              </td>
            </tr>
            <tr>
              <td className='heroRowName' >Superpowers</td>
              <td>{
                !edit.superpowers 
                ? changedData.superpowers 
                : <textarea 
                    value={changedData.superpowers} 
                    name='superpowers' 
                    onChange={onInputChange} 
                  />
              }</td>
              <td className='editBtnTd'>
                <input type="button" value="Edit" name='superpowers' onClick={changeIsEdit} />
              </td>
            </tr>
            <tr>
              <td className='heroRowName' >Catch phrase</td>
              <td>{
                !edit.catch_phrase 
                ? changedData.catch_phrase 
                : <textarea 
                    value={changedData.catch_phrase} 
                    name='catch_phrase' 
                    onChange={onInputChange} 
                  />
              }</td>
              <td className='editBtnTd'>
                <input type="button" value="Edit" name='catch_phrase' onClick={changeIsEdit} />
              </td>
            </tr>
            <tr>
              <td className='heroRowName' >Images</td>
              <td>
              <input 
                type="file" 
                name="file_button" 
                multiple={true}
                accept='image/*'
                onChange={onLoadImgs}
              />
              </td>
            </tr>
          </tbody>
        </table>
        <div>{ errorState }</div>
        <div className='heroPageButtons'>
          <input type="button" value="Delete" onClick={deleteHero} />
          <input type="button" value="Save changes" disabled={disableSave} onClick={onSave} />
          <input type="button" value="Reset changes" onClick={resetData} />
        </div>
      </div>
    );
}

export default HeroPage;
