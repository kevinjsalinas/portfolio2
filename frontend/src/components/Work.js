import React from 'react'
import Project1 from '../assets/City_Wiki.png'
import Project2 from '../assets/Dance_Matcher.png'
import Project3 from '../assets/Sales_Hero.png'


function Work() {

  return (

    <div name="work" className='bg-[#0a192f] md:h-screen w-full text-white'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-400'>Work</p>
                <p className='py-6'>/ / Check out some of my recent work</p>
            </div>

            {/* container */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* grid item */}

                <div style={{backgroundImage: `url(${Project3})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white text-center'>
                            Full-Stack Web Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.loom.com/share/0b4a7e17549e405d98f7266a82c0b85c"> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-black bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/kevinjsalinas/sales-hero"> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-black bg-white font-bold text-lg'>Code</button>
                            </a>

                        </div>

                    </div>
                </div>
                <div style={{backgroundImage: `url(${Project2})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            CLI Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.loom.com/share/c55a74f933604c6186cd0f9bc674600d"> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-black bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/kevinjsalinas/dance-match-app"> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-black bg-white font-bold text-lg'>Code</button>
                            </a>

                        </div>

                    </div>
                </div>
                <div style={{backgroundImage: `url(${Project1})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.loom.com/share/96a23a6a67e64dd6a28ad20e2b59d11d"> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-black bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/kevinjsalinas/phase-2-project"> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-black bg-white font-bold text-lg'>Code</button>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
