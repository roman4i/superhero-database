import React from 'react';
import HeroCard from '../HeroCard/HeroCard';
import PlusHero from '../buttons/PlusHero';
import './hero-card-box.css'

const HeroCardBox = ({ heroesData }) => {
	const heroesCards = heroesData.map(val => {
		return <HeroCard id={val._id} />
	})

	return(
		<div className='heroCardBox' >
			{ heroesCards }
			<PlusHero />
		</div>
	);
}

export default HeroCardBox;
