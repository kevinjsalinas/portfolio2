import React from 'react'

function Contact() {


  return (
 
    <div name="contact" className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4 text-white'>
        <form method="POST" action="https://getform.io/f/9159efe0-2d10-4274-b840-b597091ed4e6" className='flex flex-col max-w-[650px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-400'>Contact</p>
                <p className='py-4'>/ / Submit the form below or shoot me an email directly at kevinjsalinas@outlook.com</p>
            </div>
            <input className='text-black p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'/>
            <input className='text-black my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='youremail@email.com' name='email'/>
            <textarea className='text-black bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:border-amber-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

        </form>
      
    </div>
  )
}

export default Contact
