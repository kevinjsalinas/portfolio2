import React from 'react'

const Skills = () => {

  return (
    <div name="skills" className='bg-[#0a192f] text-white w-full h-screen'>
        {/* container */}

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-amber-400'>Experience</p>
                <p className='py-4'>/ / These are the technologies I've worked with</p>
            </div>   

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://img.icons8.com/?size=512&id=108784&format=png" alt="JS icon" className='w-20 mx-auto my-4' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://img.icons8.com/?size=512&id=13441&format=png" alt="Python icon" className='w-20 mx-auto my-4' />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png" alt="React icon" className='w-20 mx-auto my-4' />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://img.icons8.com/?size=512&id=ewGOClUtmFX4&format=png" alt="JS icon" className='w-20 mx-auto my-4' />
                    <p className='my-4'>Flask</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://img.icons8.com/?size=512&id=21278&format=png" alt="CSS icon" className='w-20 mx-auto my-4' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://img.icons8.com/?size=512&id=v8RpPQUwv0N8&format=png" alt="HTML icon" className='w-20 mx-auto my-4' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://img.icons8.com/?size=512&id=20906&format=png" alt="Git icon" className='w-20 mx-auto my-4' />
                    <p className='my-4'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://camo.githubusercontent.com/14f076a601e3997d8a1104f98d5eb70e3fcc3bfc082bdfea9110dac64da9ef5c/68747470733a2f2f68616b696e392e6f72672f77702d636f6e74656e742f75706c6f6164732f323031392f30382f636f6e6e6563742d612d666c61736b2d6170702d746f2d612d6d7973716c2d64617461626173652d776974682d73716c616c6368656d792d616e642d70796d7973716c2e6a7067" alt="SQLAlchemy icon" className='w-40 mx-auto py-4 pb-4' />
                    <p className='my-4'>SQLAlchemy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
