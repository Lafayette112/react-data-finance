import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DATA INSIGHT</h1>
            <ul className='hidden md:flex hover:cursor-pointer'>
                <li className='p-4'><a href="#hero">Home</a></li>
                <li className='p-4'><a href="#dashboard">Dashboard</a></li>
                <li className='p-4'><a href="#ressources">Ressources</a></li>
                <li className='p-4'><a href="#newsletter">Newsletter</a></li>
                <li className='p-4'><a href="#footer">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose className='fixed text-[#00df9a]' size={25}/> : <AiOutlineMenu size={20} />}
                
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#242424] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>DATA INSIGHT</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'><a href="#hero">Home</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#dashboard">Dashboard</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#ressources">Ressources</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#newsletter">Newsletter</a></li>
                    <li className='p-4'><a href="#footer">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar