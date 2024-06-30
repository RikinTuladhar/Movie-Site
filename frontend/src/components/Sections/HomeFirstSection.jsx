import React from "react";
import { HomeSlider, HomeSecondSection } from "../../exports/componentsExport";
const HomeFirstSection = () => {
  return (
    <div className="w-[80%] relative h-[auto] py-10  bg-green-300">
      <div className="w-full h-[auto] mb-10 px-5 top-4">
        <HomeSlider />
      </div>
      <div className="relative w-full py-10">
        <HomeSecondSection />
      </div>
    </div>
  );
};

export default HomeFirstSection;
