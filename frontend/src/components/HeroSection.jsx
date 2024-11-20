import React from 'react';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner1.jpg'
import banner3 from '../assets/banner1.jpg'

const HeroSection = () => {
  //images for the carousel
  const images = [banner1, banner2, banner3];

  // Custom Previous Arrow
  const PreviousArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none z-10"
    >
      <FiChevronLeft className="w-8 h-8" />
    </button>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none z-10"
    >
      <FiChevronRight className="w-8 h-8" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <section className="text-center lg:pt-40 pt-24 px-4 md:px-12 lg:px-20">
      {/* Carousel */}
      <div className="relative mx-auto max-w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Artwork ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
