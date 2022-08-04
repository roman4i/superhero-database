import React from 'react';
import './new-hero-page-style.css';

const NewHeroPage = () => {
  return(
    <form className='newHeroPageBox' action="">
      <table>
        <tbody>
          <tr>
            <td className='heroRowName'>Nickname</td>
            <td><input type="text" name="nickname" /></td>
          </tr>
          <tr>
            <td className='heroRowName'>Real name</td>
            <td><input type="text" name="nickname" /></td>
          </tr>
          <tr>
            <td className='heroRowName'>Origin description</td>
            <td><textarea name="origin-description" ></textarea></td>
          </tr>
          <tr>
            <td className='heroRowName'>Superpowers</td>
            <td><textarea name="superpowers" ></textarea></td>
          </tr>
          <tr>
            <td className='heroRowName'>Catch phrase</td>
            <td><textarea name="catch-phrase" ></textarea></td>
          </tr>
          <tr>
            <td className='heroRowName'>Images</td>
            <td>
              <input 
                type="file" 
                name="file-button" 
                multiple={true}
                accept='image/*'
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className='newHeroControlsBox'>
        <input type="reset" value="Reset" /><input type="submit" value="Create" />
      </div>
    </form>
  )
}

export default NewHeroPage;
