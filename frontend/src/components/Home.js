import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import profile from '../assets/kevinsalinas-portfolio.png'
import { Link } from 'react-scroll'


const Home = () => {


  return (

    <div name="home" className='w-full h-screen sm:h-[900px] bg-blue-600'>

      {/* Container */}
      <div className='px-8 flex flex-col md:flex-row items-center justify-center h-full'>
        <div className='pr-12 pb-7'>
          <img src={profile} alt="kevin-pic" className='w-[250px] md:w-[300px] lg:w-[350px] place-items-center'/>
        </div>
        <div className='sm:text-left'>
          <p className='text-gray-100  pb-4'>HI THERE, I'M</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-gray-100 '>Kevin Salinas.</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-100  '>I'm a <span className='text-amber-400 text-left'>software developer</span>.</h2>
          <p className='text-gray-100 py-4 max-w-[700px] '>Transforming ideas into tangible, real-world applications.</p>

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
      
    </div>
  )
}

export default Home
