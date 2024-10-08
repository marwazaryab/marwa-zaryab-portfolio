import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (

        // Main structure
        <div className='h-screen w-full bg-gradient-to-b from-white via-white to-green-100 text-black pt-20 flex flex-col items-center'>
            <div className='font-bold text-8xl mb-4 py-2 text-left w-full px-2'>
                Contact Me
            </div>
            <hr className='w-full border-b-4 border-black mb-6' />
            <div className='font-bold text-2xl mb-6 py-2 text-center'>
                Feel free to reach out anytime!
            </div>

            <div className='flex flex-col space-y-10'>
                <div className='flex items-center space-x-6'>
                    <a href="mailto:mzzaryab@uwaterloo.ca" target="_blank" aria-label="Email">

                        <MdEmail size={62} className="hover:text-red-500 transition-colors duration-200" />
                    </a>
                    <div className='text-lg'>mzzaryab@uwaterloo.ca</div>
                </div>
                <div className='flex items-center space-x-6'>

                    <a href="https://www.linkedin.com/in/marwazaryab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ">
                        <FaLinkedin size={62} className='hover:text-blue-700 transition-colors duration-200' />
                    </a>

                    <div className='text-lg'> linkedin.com/in/marwazaryab</div>
                </div>

                <div className='flex items-center space-x-6'>


                    <a href="https://github.com/marwazaryab" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <FaSquareGithub size={62} className='hover:text-gray-700 transition-colors duration-200' />

                    </a>
                    <div className='text-lg'>github.com/marwazaryab</div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
