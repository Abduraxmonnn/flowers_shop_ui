import './OurProducts.css';
import { images } from '../../constants';
import { OurProductsData } from '../../constants/hero';

const OurProducts = () => {
	return (
		<section className='app__ourproducts flex__center' data-aos='fade-up'>
			<div
				className='app__ourproducts-texts container'
				data-aos='fade-up'
			>
				<div className='app__ourproducts-text'>
					<p>OUR AROMAS</p>
					<h1>Most Popular</h1>
				</div>
				<button>VIEW ALL PRODUCTS</button>
			</div>

			<div className='app__ourproducts-images'>
				{OurProductsData.map(item => (
					<div
						className='hero__images__content-wrapper'
						key={item.id}
						data-aos='zoom-in'
						data-aos-duration='4000'
					>
						<img src={item.img} alt={item.title} />

						<div className='texts'>
							<p>{item.title}</p>
							<span>({item.itemsCount} items)</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
export default OurProducts;
