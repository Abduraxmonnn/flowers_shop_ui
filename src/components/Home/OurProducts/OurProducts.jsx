import './OurProducts.css'
import { OurProductsData } from '../../../constants/hero'
import { images } from '../../../constants';

const OurProducts = () => {
	return (
		<section className='app__ourproducts flex__center' data-aos='fade-up'>
			<div className='container'>
				<div className='app__ourproducts-text' data-aos='fade-up'>
					<p>OUR AROMAS</p>
					<h1>Most Popular</h1>
				</div>

				<div className='app__ourproducts-images'>
					{OurProductsData.map(item => (
						<div
							className='hero__images__content-wrapper'
							key={item.id}
							data-aos='zoom-in'
						>
							<img src={item.img} alt={item.title} />

							<div className='texts'>
								<p>{item.title}</p>
								<span>({item.itemsCount} items)</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default OurProducts
