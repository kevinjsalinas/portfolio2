import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi'
import { SiHackerrank } from "react-icons/si";
import {Link} from 'react-scroll'


import Logo from '../assets/ks-logo-white-text.png'


function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-600 text-gray-100'>
        <div>
            <img src={Logo} alt="logo" style={{width:'60px'}}/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className="flex justify-between items-center w-full tex-gray-300" href='https://www.linkedin.com/in/kevinsalinas/'>
                        LinkedIn <FaLinkedin size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className="flex justify-between items-center w-full tex-gray-300" href='https://github.com/kevinjsalinas'>
                        Github <FaGithub size={30}/>

                    </a>
                </li>
                <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#70b48b]'>
                    <a className="flex justify-between items-center w-full tex-gray-300" href='https://www.hackerrank.com/kevinjsalinas'>
                        HackerRank <SiHackerrank size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                    <a className="flex justify-between items-center w-full text-black" href='https://docs.google.com/document/d/1URbqbYSjOpeXyprhXmGMBE3-2MV_cRDMjNIyTjdR9uU/edit?usp=sharing'>
                        Resume 
                        <HiOutlineDocumentText size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bebebe] '>
                    <span className="flex justify-between items-center w-full text-slate-100">
                        <Link to="contact" smooth={true} duration={500}>
                            Email
                        </Link>
                        <HiOutlineMail size={30}/>
                    </span>
                </li>
            </ul>

        </div>


    </div>
  )
}

export default Navbar
