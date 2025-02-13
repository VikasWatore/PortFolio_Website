import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  const [menuOpen,setMenuOpen]=useState(false);
  const toggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className='max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-4'>
     <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange' >
     <NavbarLogo/>
        <div className={` transition-all duration-500 ${menuOpen ? "sm:block":"sm:hidden"} lg:block absolute top-full right-0`}>

        <NavbarLinks/>
        </div>
        <NavbarBtn/>
     </div>

     <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
    <button className='text-2xl p-3 border-orange rounded-full ' onClick={toggleMenu}> 
      <GiHamburgerMenu/></button>
     </div>
    </nav>
  )
}

export default NavbarMain