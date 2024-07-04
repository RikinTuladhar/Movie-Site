import React from "react";
import {
  HomeSlider,

} from "../../exports/componentsExport";
const HomeFirstSection = () => {
  return (
    // bg-green-300
    <div className="w-[80%] ml-16 md:w-[80%] relative h-[auto]  py-10 text-white ">
      <div className="w-full md:ml-5 h-[auto] mb-10 px-5 top-4">
        <HomeSlider />
      </div>
    </div>
  );
};

export default HomeFirstSection;
