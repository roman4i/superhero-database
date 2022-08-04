import React from 'react';
import HeroCard from '../HeroCard/HeroCard';
import PlusHero from '../buttons/PlusHero';
import './hero-card-box.css'

const HeroCardBox = () => {
	return(
		<div className='heroCardBox' >
			<HeroCard id='0' />
			<HeroCard id='1' />
			<HeroCard id='2' />
			<HeroCard id='3' />
			<HeroCard id='4' />
			<PlusHero />
		</div>
	);
}

export default HeroCardBox;
