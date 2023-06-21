import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gray-100 text-gray-700'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-amber-400'>About</p>
                </div>
                <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>A Software Developer based in Clifton, New Jersey, USA.</p>
                    </div>
                    <div>
                        <p>
                            With a background in marketing, sales, and entrepreneurship, I aspire to provide high-quality work that not only meets the project's needs but goes beyond expectations. <u className='font-bold'>I utilize my communication skills, adaptability, and drive to help businesses create impactful, reliable, and user-friendly applications that promote their best products to the world.</u> When I’m not coding, you can find me in a city near you riding my longboard 🛹 and playing guitar 🎸, not always at once.
                        </p>

                    </div>
                </div>
        </div> 
    </div>
  )
}

export default About
