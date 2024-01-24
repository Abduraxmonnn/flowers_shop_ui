import {
	Header,
	Intro,
	HeroSection,
	AboutUs,
	OurProducts,
	CustomProducts,
	Footer,
	Gallery,
} from '../components/';


const Home = () => {
	return (
		<main>
			<Header />
			<Intro />
			<HeroSection />
			<AboutUs />
			<OurProducts />
			<CustomProducts />
			<Gallery />
			<Footer />
		</main>
	)
}

export default Home;
