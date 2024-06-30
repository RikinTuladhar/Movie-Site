import React from "react";
import {
  HomeSlider,
  HomeSecondSection,
  HomeThirdSection,
} from "../../exports/componentsExport";
const HomeFirstSection = () => {
  return (
    // bg-green-300
    <div className="w-[80%] relative h-[auto] py-10 text-white ">
      <div className="w-full h-[auto] mb-10 px-5 top-4">
        <HomeSlider />
      </div>
      <div className="relative w-full py-10">
        <HomeSecondSection />
      </div>
      <div className="relative w-full py-10">
        <HomeThirdSection />
      </div>
    </div>
  );
};

export default HomeFirstSection;
