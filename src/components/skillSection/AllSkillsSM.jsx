import React from 'react'
import { FaHtml5} from "react-icons/fa";
import { FaJsSquare} from "react-icons/fa";
import { FaCss3Alt} from "react-icons/fa";
import { FaJava} from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import {motion} from "framer-motion";
import {fadeIn} from '../framerMotion/variants';
const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt
    },
    {
      skill: "JavaScript",
      icon: FaJsSquare
    },
    {
      skill: "ReactJS",
      icon: RiReactjsLine
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill
    },
    {
      skill: "Java",
      icon: FaJava
    },
    {
      skill: "NextJS",
      icon: RiNextjsFill
    },
  ]

 const AllSkillsSm=()=>{
    return(<div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 '>
      {skills.map((item,index)=>{
          return<motion.div 
            variants={fadeIn('up',`0.2`)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false,amount:0.7}}
          key={index} className='flex flex-col items-center'>
             <item.icon className='text-7xl text-orange'/>
             <p className='text-center mt-4 text-white'>{item.skill}</p>
          </motion.div>
      })}
  </div>)
 } 
 
 export default AllSkillsSm