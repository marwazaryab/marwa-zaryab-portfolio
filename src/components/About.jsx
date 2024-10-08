import React from 'react'
import image4 from '../assets/image4.jpg';


const About = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-white via-white to-green-100 text-black pt-20 flex flex-col items-center '>

      <div className='font-bold text-8xl mb-4 py-2 text-left w-full px-2'>
        About me
      </div>
      <hr className='w-full border-b-4 border-black mb-6' />
      <div className=' flex flex-col text-center mt-2 md:mt-0 md:w-1/2  justify-center items-center mb-2'>
        <p className='text-black m-w-med text-sm md:text-med'>
          I have a strong passion for robotics and full-stack development, and I love to explore new technologies.
          I believe that technology has the potential to drive positive change in our communities, and I aspire to work for a company dedicated to creating solutions that impact peoples lives.<br /><br />
          I have experience in Java, C++, Python, and JavaScript, as well as design tools like Autodesk Inventor and KiCAD. I am always looking for opportunities to grow my skill set.<br /><br />
          I enjoy many aspects of engineering, from software and electrical to design. I am eager to find a job where I can apply my experiences to contribute to innovative projects that make a meaningful difference in the world.
        </p>
        <img
          src={image4}
          alt="Marwa2"
          className='rounded-2xl mx-auto w-3/4 md:w-2/3 mb-6 py-4'
        />
      </div>
    </div>

  )
}

export default About
