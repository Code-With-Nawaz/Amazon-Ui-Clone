import React, { useState, useEffect } from 'react';
import Slider1 from '../assets/images/slider/slider1.jpg';
import Slider2 from '../assets/images/slider/slider2.png';
import Slider3 from '../assets/images/slider/slider3.jpg';
import Slider4 from '../assets/images/slider/slider4.jpg';
import Slider5 from '../assets/images/slider/slider5.jpg';
import Slider6 from '../assets/images/slider/slider6.jpg';
import Slider7 from '../assets/images/slider/slider7.jpg';
import Slider8 from '../assets/images/slider/slider8.jpg';
import Slider9 from '../assets/images/slider/slider9.jpg';
import Slider10 from '../assets/images/slider/slider10.jpg';

function Slider() {
  const images = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, Slider8, Slider9, Slider10];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Automatically move to the next image after a specified interval
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3s
    return () => clearInterval(interval);
  },);

  return (
    <div className="slider">
      <button className="prev-button" onClick={prevSlide} aria-label="Previous slide">
        &#10094;
      </button>
      <div className="slider-image">
        <img src={images[currentIndex]} style={{ width: '100%', height: '100%' }} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="next-button" onClick={nextSlide} aria-label="Next slide">
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
