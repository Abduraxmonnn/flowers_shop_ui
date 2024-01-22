import React from 'react';

import {
	Header,
	Intro,
	HeroSection,
	AboutUs,
	OurProducts,
	CustomProducts,
	Footer,
	Gallery,
} from './components'
import './App.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

// init AOS animation
AOS.init({
	duration: 1000,
	offset: 100,
})

const App = () => (
	<div>
		<Header />
		<Intro />
		<HeroSection />
		<AboutUs />
		<OurProducts />
		<CustomProducts />
		<Gallery />
		<Footer />
	</div>
)

export default App;
