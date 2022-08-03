import React from 'react';
import HeroCard from '../HeroCard/HeroCard';
import './hero-card-box.css'

const HeroCardBox = () => {
	return(
		<div className='heroCardBox' >
			<HeroCard />
			<HeroCard />
			<HeroCard />
			<HeroCard />
			<HeroCard />
		</div>
	);
}

export default HeroCardBox;
