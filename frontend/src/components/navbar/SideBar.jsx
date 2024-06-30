import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { PiTelevisionLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
const SideBar = () => {
  return (
    <div className='w-[8%] fixed left-0 z-50 h-full justify-start gap-10 items-center py-10 text-white flex flex-col  bg-secondary'>
        <h1 className='text-white'><GiHamburgerMenu  className='w-[50px] h-[30px]' /></h1>
      <div className=''><IoHomeOutline  className='w-[100px] h-[30px]'/></div>
      <div><CiYoutube  className='w-[100px] h-[30px]' /></div>
      <div><PiTelevisionLight className='w-[100px] h-[30px]'/></div>
    </div>
  )
}

export default SideBar
