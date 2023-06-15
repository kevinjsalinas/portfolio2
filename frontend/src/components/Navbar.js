import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail, HiOutlineDocumentText} from 'react-icons/hi'
import { SiHackerrank } from "react-icons/si";


import Logo from '../assets/ks-logo-white-text.png'


function Navbar() {

    const [nav, setNav] = useState(false)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" style={{width:'60px'}}/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger */}

        <div onClick={() => setNav(!nav)} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className="flex justify-between items-center w-full tex-gray-300" href='/'>
                        LinkedIn <FaLinkedin size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className="flex justify-between items-center w-full tex-gray-300" href='/'>
                        Github <FaGithub size={30}/>

                    </a>
                </li>
                <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#70b48b]'>
                    <a className="flex justify-between items-center w-full tex-gray-300" href='/'>
                        HackerRank <SiHackerrank size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                    <a className="flex justify-between items-center w-full text-black" href='/'>
                        Resume <HiOutlineDocumentText size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bebebe] '>
                    <a className="flex justify-between items-center w-full text-slate-100" href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>

        </div>


    </div>
  )
}

export default Navbar
