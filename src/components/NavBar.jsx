import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const [nav, setNav] = useState(false); // State for when navigation bar is on

    // links to all pages
    const links = [
        {
            id: 1,
            link: 'Home',
            path: '/'
        },
        {
            id: 2,
            link: 'About',
            path: '/about'
        },
        {
            id: 3,
            link: 'Projects',
            path: '/projects'
        },
        {
            id: 4,
            link: 'Contact',
            path: 'contact'
        },

    ]
    return (

        // main bracket
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-green-950 fixed'>
            <div>
                <h1 className="text-5xl font-bold ml-2"> MZ</h1>
            </div>

            <ul className="hidden md:flex">


                {links.map(({ id, link, path }) => ( //map all links, set to enlarge when cursor is hovered
                    <li key={id}
                        className="px-4 cursor-pointer captialize font-medium
                     text-white hover:scale-105 duration-200">
                        <Link to={path}>
                            {link}

                        </Link>
                    </li>
                ))}


            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-black md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-green-100'>

                    {links.map(({ id, link, path }) => (
                        <li key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl text-black">
                            <Link to={path} onClick={() => setNav(false)}>
                                {link}

                            </Link>
                        </li>
                    ))}

                </ul>
            )

            }

        </div>
    )
}

export default NavBar
