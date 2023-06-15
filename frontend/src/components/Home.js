import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
// import profile from '../assets/kevinsalinas-portfolio.png'

const Home = () => {


  return (

    <div name="home" className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* <div>
          <img src={profile} alt="kevin-pic" className='w-[270px] md:w-[350px] place-items-center justify-center mx-auto'/>
        </div> */}
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Kevin Salinas.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a software developer.</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>I'm a software developer that enjoys transforming ideas into tangible, real-world applications</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-amber-400'>View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
          </span>
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Home
