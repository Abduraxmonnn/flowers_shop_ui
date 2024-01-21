import './AboutUs.css'

import { images } from '../../constants/images'

const AboutUs = () => {
	return (
		<section className='app__aboutus container' data-aos='fade-down'>
			<div className='app__aboutus-texts'>
				<div className='app__aboutus-title'>
					<p>ABOUT US</p>
					<h1>We provide all kinds of fresh flower services</h1>
				</div>
				<span>
					For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
					Canada, growing flowers that can be dried and incorporated
					into late fall and winter floral arrangements has been a
					game-changer. During her growing season, this farmer-florist
					relies on a vivid palette of annuals, perennials and
					ornamental grasses to supply her studio.
				</span>
			</div>

			<div className='app__aboutus_content'>
				<img
					src={images.perfume_aboutus}
					alt='perfume'
					data-aos='fade-left'
				/>

				<div
					className='app__aboutus_content-texts'
					data-aos='fade-right'
				>
					<p>SLOW FLOWERS’ FLORAL INSIGHTS</p>
					<h1>Dried flowers are having a renaissance</h1>
					<span>
						This awareness has been stimulated by sustainable
						sourcing practices and the desire on the part of North
						American flower growers to “extend the season” beyond
						the last frost.
					</span>
					<button className='custom__button'>Contact Us</button>
				</div>
			</div>
		</section>
	)
}
export default AboutUs
