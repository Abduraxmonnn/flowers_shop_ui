import { heroImages, heroTextContent } from '../../../constants/hero';
import './HeroSection.css'

const HeroSection = () => {
  return (
		<section className='app__hero flex__center' data-aos='fade-up'>
			<div className='container'>
				<ul className='hero__text-list'>
					{heroTextContent.map(item => (
						<li key={item.id}>
							<img src={item.icon} alt={item.title} />

							<div>
								<p>{item.title}</p>
								<span>{item.text}</span>
							</div>
						</li>
					))}
				</ul>

				<div
					className='hero__images'
					data-aos='fade-up'
					data-aos-duration='2000'
				>
					{heroImages.map(item => (
						<div className='hero__images__content-wrapper'>
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
};
export default HeroSection;
