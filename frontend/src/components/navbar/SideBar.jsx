import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { PiTelevisionLight } from "react-icons/pi";
const SideBar = () => {
  return (
    <div className='w-[8%] justify-start gap-10 items-center py-10 text-white flex flex-col h-full bg-secondary'>
      <div className=''><IoHomeOutline  className='w-[100px] h-[30px]'/></div>
      <div><CiYoutube  className='w-[100px] h-[30px]' /></div>
      <div><PiTelevisionLight className='w-[100px] h-[30px]'/></div>
    </div>
  )
}

export default SideBar
