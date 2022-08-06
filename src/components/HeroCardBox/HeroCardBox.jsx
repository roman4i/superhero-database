import React from 'react';
import HeroCard from '../HeroCard/HeroCard';
import PlusHero from '../buttons/PlusHero';
import './hero-card-box.css'

const HeroCardBox = ({ heroesData }) => {
	const heroesCards = heroesData.map((val, index) => {
		return <HeroCard id={val._id} cardName={val.nickname} key={val + index} />
	})

	return(
		<div className='heroCardBox' >
			{ heroesCards }
			<PlusHero />
		</div>
	);
}

export default HeroCardBox;
