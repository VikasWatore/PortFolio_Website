import React from 'react'
import { Link } from 'react-scroll'
const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About ME</h2>
        <p className='text-white'>
        I am a passionate Full-Stack Java Developer in the making, skilled in Java, JavaScript, Spring Boot, MySQL, HTML, CSS, and JavaScript. 
        I have experience working with Postman, VSCode, and Eclipse, and
         I enjoy developing web applications, interactive projects, and database-driven solutions. Currently, 
        I am focused on enhancing my expertise in Spring Boot and full-stack development, 
        aiming to build scalable and efficient applications. I am always eager to learn new technologies and take on challenging projects to grow as a developer.
        </p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
          </Link>
          </button>
    </div>
  )
}

export default AboutMeText