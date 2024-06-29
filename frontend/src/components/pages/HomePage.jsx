import React from 'react'
import { HomeFirstSection,HomepageCover,NavBar,SideBar,HomeSlider} from "../../exports/componentsExport"
const HomePage = () => {
  return (
    <HomepageCover>
      <NavBar/>
      <div className='flex w-full  h-[100vh] gap-28 items-center'>
          <SideBar/>
          <HomeFirstSection/>
      </div>
    </HomepageCover>
  )
}

export default HomePage
