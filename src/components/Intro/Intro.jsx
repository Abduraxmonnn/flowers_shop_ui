import './Intro.css'

const Intro = () => {
	return (
		<div className='app__intro' data-aos='fade-up'>
			<p data-aos='fade-up'>Fresh Flower & Gift Shop</p>
			<h1>Making beautiful flowers a part of your life.</h1>

			<button
				className='custom__button'
				data-aos='fade-up'
				data-aos-duration='2000'
			>
				Shop Now
			</button>
		</div>
	)
}
export default Intro
