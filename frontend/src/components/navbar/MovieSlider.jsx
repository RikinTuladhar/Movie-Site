import React, { useState } from 'react';

const MovieSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, img: "./deadpool.jfif" },
    { id: 2, img: "./Godzilla_x_kong_the_new_empire_poster.jpg" },
    { id: 3, img: "./deadpool.jfif" },
    { id: 4, img: "./Godzilla_x_kong_the_new_empire_poster.jpg" },
    { id: 5, img: "./deadpool.jfif" },
    { id: 6, img: "./Godzilla_x_kong_the_new_empire_poster.jpg" },
    { id: 7, img: "./deadpool.jfif" },
    { id: 8, img: "./Godzilla_x_kong_the_new_empire_poster.jpg" },
    { id: 9, img: "./deadpool.jfif" },
    { id: 10, img: "./Godzilla_x_kong_the_new_empire_poster.jpg" },
  ];

  //here nexIndex suppose = 2; then 2 * 100 = width = 200% at line 38. mean the view will change  

  const handlePrevClick = () => {
    //test case : [ 10 ] -> maxInedx = 2; 
    const maxIndex = Math.ceil(slides.length / 4) - 1; 
    const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const maxIndex = Math.ceil(slides.length / 4) - 1;
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-[50vh] w-full overflow-hidden slider">
      <div
        className="flex space-x-1 transition-transform duration-500 slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-[25%] slide"
          >
            <img src={slide.img} alt={`Slide ${slide.id}`} className="object-contain w-full h-full" />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-lg left-5 top-1/2"
      >
        Prev
      </button>
      <button
        onClick={handleNextClick}
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-lg right-5 top-1/2"
      >
        Next
      </button>
    </div>
  );
};

export default MovieSlider;
