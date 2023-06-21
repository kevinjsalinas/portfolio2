import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
// import profile from '../assets/kevinsalinas-portfolio.png'
import { Link } from 'react-scroll'


const Home = () => {


  return (

    <div name="home" className='w-full h-screen bg-blue-600'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* <div>
          <img src={profile} alt="kevin-pic" className='w-[270px] md:w-[350px] place-items-center justify-center mx-auto'/>
        </div> */}
        <p className='text-gray-100'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>Kevin Salinas.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-100'>I'm a <b className='text-amber-400'>software developer</b>.</h2>
        <p className='text-gray-100 py-4 max-w-[700px]'>Transforming ideas into tangible, real-world applications.</p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className='text-amber-400 group border-2 px-6 py-3 my-2 flex items-center hover:border-amber-400'>
              View work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>

      </div>
      
    </div>
  )
}

export default Home
