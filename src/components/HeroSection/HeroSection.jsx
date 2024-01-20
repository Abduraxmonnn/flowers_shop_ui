import './HeroSection.css';
import { heroImages, heroTextContent } from '../../constants/hero';

const HeroSection = () => {
  return (
    <section className="app__hero flex__center">
      <div className="container">
        <ul className="hero__text-list">
          {heroTextContent.map((item) => (
            <li key={item.id}>
              <img src={item.icon} alt={item.title} />

              <div>
                <p>{item.title}</p>
                <span>{item.text}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className='hero__images'>
          {heroImages.map((item) => (
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
  );
};
export default HeroSection;
