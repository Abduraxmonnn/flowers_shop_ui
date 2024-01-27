import './Gallery.css';
import { heroGallery } from '../../../constants/hero';

const Gallery = () => {
	return (
		<section className='app__gallery'>
			<div className='container'>
				<div className='app__gallery-images' data-aos='fade-up'>
					{heroGallery.map(item => (
						<div className='app__gallery_images-wrapper'>
							<img src={item.img} alt='image' />
							<img
								src={item.btn}
								alt='button'
								data-aos='zoom-in'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Gallery
