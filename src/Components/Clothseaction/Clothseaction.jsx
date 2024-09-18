import React from 'react';
import Slider from 'react-slick';
import './Clothseaction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,        
  autoplaySpeed: 3000,   
  appendArrows: '.carousel-arrows'
};

const Clothseaction = () => {
  return (
    <div className="cloth-container mt-3">
      <div className="desktop-view">
        <div className="image-container women-image">
          <h1>Women</h1>
          <button className='women-btn'>
            Shop Women 
            <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
          </button>
        </div>
        <div className="image-container men-image">
          <h1>Men</h1>
          <button className='men-btn'>
            Shop Men 
            <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
          </button>
        </div>
        <div className="image-container kid-image">
          <h1>Kids</h1>
          <button className='kid-btn'>
            Shop Kids 
            <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
          </button>
        </div>
      </div>

      <div className="mobile-view">
        <Slider {...settings} className="carousel">
          <div className="image-slide women-image">
            <h1>Women</h1>
            <button className='women-btn'>
              Shop Women 
              <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
            </button>
          </div>
          <div className="image-slide men-image">
            <h1>Men</h1>
            <button className='men-btn'>
              Shop Men 
              <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
            </button>
          </div>
          <div className="image-slide kid-image">
            <h1>Kids</h1>
            <button className='kid-btn'>
              Shop Kids 
              <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
            </button>
          </div>
        </Slider>
        <div className="carousel-arrows"></div>
      </div>
    </div>
  );
};

export default Clothseaction;
