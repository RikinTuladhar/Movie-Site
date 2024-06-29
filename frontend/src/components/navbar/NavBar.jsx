import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  return (
    <div className='w-full  bg-navColor h-[10vh]'>
      <div className='flex justify-between  h-full px-10 items-center '>
        <h1 className='text-white'><GiHamburgerMenu  className='w-[50px] h-[30px]' /></h1>
        <div className='flex justify-between gap-5 items-center'>
          <input type='text' placeholder='Search...' className='p-1 w-96 border-2 rounded-md bg-[#15121E] text-white ' />
        </div>
        <ul className='flex'>
        <li className='text-white bg-btnColor px-3 py-2 rounded-2xl'>Sign in</li>
        </ul>
      </div>
       
    </div>
  )
}

export default NavBar
