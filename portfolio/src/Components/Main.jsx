import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter,FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img 
      className='w-full h-screen object-cover object-left scale-x-[-1]' 
      alt='/'
      src='https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full 
        flex flex-col justify-center lg:items-start items-center'> 
            <h1 className='sm:text-5xl text-4xl font-bold 
            text-gray-800'>I'm Enya, Emmanuel Pius</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'React developer',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'React Native developer',
                    2000,
                    'Data analyst',
                    2000,
                    'Problem solver',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', paddingLeft:'5px' }}
                repeat={Infinity}
                />
            </h2>
            <div className='flex justify-between justify-center pt-6 max-w-[200px] w-full items-center'>
                <FaTwitter className='cursor-pointer' size={20}/>
                <FaFacebookF className='cursor-pointer' size={20}/>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaLinkedinIn className='cursor-pointer' size={20}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
