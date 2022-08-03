import React from 'react';
import HeroCard from '../HeroCard/HeroCard';
import PlusHero from '../buttons/PlusHero';
import './hero-card-box.css'

const HeroCardBox = () => {
	return(
		<div className='heroCardBox' >
			<HeroCard />
			<HeroCard />
			<HeroCard />
			<HeroCard />
			<HeroCard />
			<PlusHero />
		</div>
	);
}

export default HeroCardBox;
