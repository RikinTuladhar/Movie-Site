import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderMovieCards } from "../../exports/componentsExport";
import "./HomeSlider.css"
const HomeSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" w-[90%] md:w-full  relative h-[50vh]">
      <Carousel className="w-full h-full" responsive={responsive}>
        <div>
          <SliderMovieCards />
        </div>
        <div>
          <SliderMovieCards />
        </div>
        <div>
          <SliderMovieCards />
        </div>
        <div>
          <SliderMovieCards />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
