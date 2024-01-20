import { React } from 'react';

import './HeroSectionContainer.css';

const HeroSectionContainer = (props) => {
  return (
    <section className="app__hero-sections">
      <div className="container">
        <div className="app__hero-content">
          <img src={props.icon} alt="icon" />
          <div className="app__hero-content-text">
            <p className="app__hero-section-title">{props.title}</p>
            <p className="app__hero-section-subtitle">{props.subtitle}</p>
          </div>
        </div>

        <div className="app__hero-container">
          <img src={props.backgroundImg} alt="background image" />
          <div className="app__hero-container-button">
            <p>Fresh Flower</p>
            <p>(25 items)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionContainer;
