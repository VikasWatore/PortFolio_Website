import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import { motion } from "framer-motion";
import { fadeIn } from '../framerMotion/variants';
import { BiLogoSpringBoot } from "react-icons/bi";
const skills = [
  {
    skill: "HTML",
    icon: <FaHtml5 />,
  },
  {
    skill: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    skill: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    skill: "ReactJS",
    icon: <RiReactjsLine />,
  },
  {
    skill: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    skill: "Java",
    icon: <FaJava />,
  },
  {
    skill: "Spring Boot",
    icon: <BiLogoSpringBoot />,
  },
]
const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn('up', `0.${index}`)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={item.icon} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default AllSkills