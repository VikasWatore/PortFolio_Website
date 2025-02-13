import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import {motion} from "framer-motion";
import {fadeIn} from '../framerMotion/variants';
const HeroPic = () => {
  return (
    <motion.div 
     variants={fadeIn('left',0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false,amount:0}}
    className='h-full flex items-center justify-center '>
        <img src="/images/prof.jpg" alt="" 
        className='max-h-[400px] w-auto  rounded-full' />
        <div className='absolute -z-10 flex justify-center animate-pulse overflow-hidden'>
        <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
        </div>
    </motion.div>
  )
}

export default HeroPic