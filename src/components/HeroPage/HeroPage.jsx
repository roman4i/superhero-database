import React from 'react';
import './hero-page-style.css';

const HeroPage = () => {
    return(
      <div className='heroPageBox'>
        <table>
          <tbody>
            <tr>
              <td className='heroRowName' >Nickname</td>
              <td>Here be the hero nickname</td>
            </tr>
            <tr>
              <td className='heroRowName' >Real name</td>
              <td>Here be hero name</td>
            </tr>
            <tr>
              <td className='heroRowName' >Origin description</td>
              <td>Here be the heroes origin description</td>
            </tr>
            <tr>
              <td className='heroRowName' >Superpowers</td>
              <td>Here be heroes list of superpowers</td>
            </tr>
            <tr>
              <td className='heroRowName' >Catch phrase</td>
              <td>What people say when see the hero</td>
            </tr>
            <tr>
              <td className='heroRowName' >Images</td>
              <td>Here must be the list of heroes images</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default HeroPage;
