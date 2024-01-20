import { React } from 'react';

import { images } from '../../constants';
import HeroSectionContainer from '../../container/HeroSectionContainers/HeroSectionContainer';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<div className='app__hero flex__center'>
			<HeroSectionContainer
				title='100% Freshness'
				subtitle='Most people are unaware of the less common flower'
				icon={images.eco_packaging}
				backgroundImg={images.flower}
			/>
			<HeroSectionContainer
				title='100% Freshness'
				subtitle='Most people are unaware of the less common flower'
				icon={images.green_earth}
				backgroundImg={images.flower}
			/>
			<HeroSectionContainer
				title='100% Freshness'
				subtitle='Most people are unaware of the less common flower'
				icon={images.green_energy}
				backgroundImg={images.violet_flowers}
			/>
			<HeroSectionContainer
				title='100% Freshness'
				subtitle='Most people are unaware of the less common flower'
				icon={images.save_earth}
				backgroundImg={images.violet_flowers}
			/>
		</div>
	)
}
export default HeroSection;
