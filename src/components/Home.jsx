import React from 'react';
import marwa from '../assets/marwa.jpg';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';




const Home = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects');

  }

  return (
    <div
      className='h-screen w-full bg-gradient-to-b from-white via-white to-green-100 text-black'
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full md:w-1/2'>


          <h1 className='text-2xl'>
            hey, i'm

          </h1>

          <h2 className='text-4xl sm:text-7xl font-bold'>
            Marwa Zaryab
          </h2>
          <p className='text-black py-4 m-w-med'>
            a Systems Design Engineering Student at University of Waterloo
          </p>
          <div>

            <button onClick={handleClick} className='group flex items-center bg-green-950 text-white px-6 py-3 my-2 w-fit 
            rounded-md cursor-pointer'>My Projects
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



    </div>
  );
};


export default Home;