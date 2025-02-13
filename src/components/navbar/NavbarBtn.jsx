import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from 'react-scroll';
const NavbarBtn = () => {
  return (
    <Link
    to="contact" 
    smooth={true} 
    spy={true} 
    duration={500} 
    offset={-120}
    className='px-4 py-2 rounded-full text-xl font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange  hover:scale-110 transition-all duration-500 shadow-[0px_0px_20px_0px_rgba(94,286,220,0.5)]  ' 
    >Hire Me
    <div className='sm:hidden md:block'>
    <LuArrowDownRight/>
    </div>
    </Link>
    
  )
}

export default NavbarBtn