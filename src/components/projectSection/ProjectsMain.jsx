import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from "framer-motion";
import {fadeIn} from '../framerMotion/variants';
const projects=[
    {
      name: "Simon Game",
      align: "right",
      image: "/images/simon.png", 
      link: "https://vikaswatore.github.io/Simon-Says-Game-/",
      description: "A fun memory game where players repeat an increasing sequence of colors and sounds."
    },
    {
      name: "Quiz Application",
      align: "left",
      image: "/images/QuizApp.png", 
      link: "https://github.com/VikasWatore/Quiz-Application",
      description: "An interactive quiz application built using Java and Swing, with MySQL as the backend."
     },
     
     {
         name: "Currency Converter",
         align: "Right",
         image: "/images/CurrencyConverter.png",
         link: "https://github.com/VikasWatore/React/tree/main/06currencyConverter",
         description: "A real-time currency converter that allows users to convert between different currencies."
     }
     
]


const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
       variants={fadeIn('up',0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{once:false,amount:0}}
      >

        <ProjectsText/>
      </motion.div>
    <div className='flex flex-col gap-20 max-w-[900] mx-auto mt-12'>
       {projects.map((item,index)=>{
        return <SingleProject key={index} name={item.name} align={item.align} image={item.image} description={item.description} link={item.link
          
        } />
       })
       }
    </div>
    </div>
  )
}

export default ProjectsMain