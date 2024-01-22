import './Gallery.css'
import { images, hero } from '../../constants';
import { heroGallery } from '../../constants/hero';

const Gallery = () => {
	return (
		<section>
			<div className='app__gallery-images container' data-aos='fade-up'>
				{heroGallery.map(item => (
					<div className='app__gallery_images-wrapper'>
						<img src={item.img} alt='image' />
						<img src={item.btn} alt='button' data-aos='zoom-in' />
					</div>
				))}
			</div>
		</section>
	)
}
export default Gallery
