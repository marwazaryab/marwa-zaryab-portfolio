import React from 'react';
import frc_robot from '../assets/frc_robot.jpg';
import arm from '../assets/arm.jpg';
import battleship from '../assets/battleship.jpg';
import pcb from '../assets/pcb.png';

const Projects = () => {

    // project details
    const projects = [
        {
            title: '2024 FRC Robot Maestro',
            description: 'Java, Controls Systems',
            link: '',
            image: frc_robot
        },
        {
            title: 'Custom Designed PCB',
            description: 'KiCAD',
            link: '',
            image: pcb

        },
        {
            title: '5 axis Arm',
            description: 'Arduino, Autodesk Inventor, C',
            link: 'https://github.com/marwazaryab/arm-project',
            image: arm
        },
        {
            title: 'battleship',
            description: 'Java, Swing',
            link: 'https://github.com/marwazaryab/BattleshipGame',
            image: battleship
        },
    ];

    return (
        <div className='min-h-screen w-full bg-gradient-to-b from-white via-white to-green-100 text-black pt-20 flex flex-col items-center'>
            <div className='font-bold text-8xl mb-4 py-2 text-left w-full px-2'>
                Projects
            </div>
            <hr className='w-full border-b-4 border-black mb-6 items-center' />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full px-2 items-center mb-10 p-4'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='bg-white border border-gray-300 rounded-lg shadow-md p-4 w-11/12  hover:scale-105 transition-transform duration-300 ease-in-out'
                    >

                        {project.image && (
                            <img src={project.image} alt={project.title} className='w-full h-72 object-contain rounded-t-lg'></img>// project fixed image

                        )
                        }
                        <div className='p-6'>
                            <h2 className='font-bold text-med mb-2'>
                                {project.title}

                            </h2>
                            <p className=' mb-4'>
                                {project.description}

                            </p>
                        
                            {project.link && (//link to projects if a link is specified 
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-blue-500 hover:underline'
                                >
                                    View on GitHub
                                </a>
                            )}

                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
