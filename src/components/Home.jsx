import React from 'react';
import marwa from '../assets/marwa.jpg';
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div 
      name="home" 
      className='h-screen w-full bg-gradient-to-b from-white via-white to-green-100 text-black'
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full md:w-1/2'>
          <h2 className='text-4xl sm:text-7xl font-bold'>
            Hey, I am Marwa!
          </h2>
          <p className='text-black py-4 m-w-med'>
            Systems Design Engineering Student at University of Waterloo!
          </p>
          <div>
            <button className='group flex items-center bg-green-950 text-white px-6 py-3 my-2 w-fit 
            rounded-md cursor-pointer'>My projects
              <span className='group-hover:rotate-90 duration-300'>

              <FaArrowRight />
              </span>
              
            </button>
          </div>
        </div>
        <div className='mt-2 md:mt-0 md:w-1/2 flex justify-center items-center'>
          <img 
            src={marwa} 
            alt="Marwa" 
            className='rounded-2xl mx-auto w-1/2 md:w-full' 

          />
        </div>
      </div>

      <footer className=" bg-green-950 text-white text-center py-4">
      <p>© 2024 Marwa Zaryab</p>
    </footer>

    </div>
  );
};


export default Home;