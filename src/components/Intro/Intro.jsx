import React from 'react'

import { images } from '../../constants';
import './Intro.css'

const Intro = () => {
	return (
		<div className='app__intro flex__center'>
			{/* <div className='app__intro-overlay flex__center'>
				<img src={images.intro_background} alt='background' />
			</div> */}

			<div className='app__intro-content'>
				<div className='app__intro-title'>
					<p>Fresh Flower & Gift Shop</p>
					<h1>Making beautiful flowers a part of your life.</h1>
				</div>

				<div className='app__intro-button'>
					<button className='app__intro-button_shop-now'>
						Shop Now
					</button>
				</div>
			</div>
		</div>
	)
}
export default Intro
