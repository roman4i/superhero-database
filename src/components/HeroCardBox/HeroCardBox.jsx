import React from 'react';
import HeroCard from '../HeroCard/HeroCard';
import PlusHero from '../buttons/PlusHero';
import './hero-card-box.css'

const HeroCardBox = ({ heroesData, pagePosition }) => {
	let currentPageCards = [];
	if(pagePosition.max  - pagePosition.current >= 0) {
		const currentCards = pagePosition.current * 5
		currentPageCards = heroesData.slice(currentCards - 5, currentCards);
	} else {
		currentPageCards = heroesData.slice(pagePosition.current * 5 - 5);
	}
	const heroesCards = currentPageCards.map((val, index) => {
		return <HeroCard id={val._id} cardName={val.nickname} imgs={val.images} key={val + index} />
	})

	return(
		<div className='heroCardBox' >
			{ heroesCards }
			<PlusHero />
		</div>
	);
}

export default HeroCardBox;
