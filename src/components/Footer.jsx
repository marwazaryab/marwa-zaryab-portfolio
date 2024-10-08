import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (

    // Links to all social media
    <div>
      <footer className=" bg-green-950 text-white text-center py-10 mt-auto">
        <p>© 2024 Marwa Zaryab</p>
        <div className='justify-center flex col'>
          <a href="https://www.linkedin.com/in/marwazaryab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ">
            <FaLinkedin size={30} className='hover:text-blue-700 transition-colors duration-200' />
          </a>
          <a href="https://github.com/marwazaryab" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaSquareGithub size={30} className='hover:text-gray-700 transition-colors duration-200' />

          </a>

          <a href="mailto:mzzaryab@uwaterloo.ca" target="_blank" aria-label="Email">

            <MdEmail size={34} className="hover:text-red-500 transition-colors duration-200" />
          </a>
        </div>

      </footer>

    </div>
  )
}

export default Footer