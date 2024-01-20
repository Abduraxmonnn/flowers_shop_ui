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
