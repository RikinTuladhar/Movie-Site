import React from 'react'
import { HomeFirstSection,HomepageCover,NavBar,SideBar,HomeSlider} from "../../exports/componentsExport"
const HomePage = () => {
  return (
    <HomepageCover>
      <div className='relative h-[10vh] z-50 w-full '>
      <NavBar/>
      </div>
      <div className='w-full space-x-48 relative h-[auto] '>
          <SideBar/>
          <HomeFirstSection/>
      </div>
    </HomepageCover>
  )
}

export default HomePage
