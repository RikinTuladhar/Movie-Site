import React from "react";
import {
  HomeFirstSection,
  HomepageCover,
  NavBar,
  SideBar,
  HomeSlider,
  HomeSecondSection,
  HomeThirdSection,
} from "../../exports/componentsExport";
import MovieSlider from "../navbar/MovieSlider";
const HomePage = () => {
  return (
    <HomepageCover>
      <div className="relative h-[15vh]  md:h-[10vh] z-50 w-full ">
        <NavBar />
      </div>
      <div className="w-full  md:space-x-48 relative h-[auto] ">
        <SideBar />
        <HomeFirstSection />
        <div className="w-[80%] ml-16 md:w-[80%] relative h-[auto]  py-10 text-white">
          <HomeSecondSection />
        </div>
        <div className="w-[80%] ml-16 md:w-[80%] relative h-[auto]  py-10 text-white">
          <HomeThirdSection />
        </div>
        <div className="w-[80%] ml-16 md:w-[80%] relative h-[auto]  py-10 text-white">
          <MovieSlider />
        </div>
      </div>
    </HomepageCover>
  );
};

export default HomePage;
