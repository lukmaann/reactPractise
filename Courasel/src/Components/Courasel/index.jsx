/* eslint-disable react/prop-types */
import  { useState, useEffect, useRef } from 'react';
import CarouselItem from '../CouraselItem';



const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1 >= items.length ? 0 : prevIndex + 1);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.scrollWidth / items.length * activeIndex - carouselRef.current.offsetWidth / 2+ (carouselRef.current.scrollWidth / items.length) / 2;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [activeIndex, items.length]);

  return (
    <div className="relative flex items-center w-full justify-center py-6 ">
      <button onClick={handlePrev} className="absolute left-0 z-10 bg-orange-500 p-2 rounded-full shadow-md">
        Prev
      </button>
      <div className="flex  w-[60%] gap-10 overflow-hidden" ref={carouselRef}>
        {items.map((item, index) => (
          <CarouselItem key={index} {...item} isActive={index === activeIndex} />
        ))}
      </div>
      <button onClick={handleNext} className="absolute right-0 z-10 bg-orange-500 p-2 rounded-full shadow-md">
        Next
      </button>
    </div>
  );
};


export default Carousel;