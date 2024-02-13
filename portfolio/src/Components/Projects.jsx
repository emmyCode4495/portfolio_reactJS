import React from 'react'
import ProjectItem from './ProjectItem'
import CryptoImg from '../assets/crypt.jpg'
import NetflixImg from '../assets/netflix.jpg'
import PropertyImg from '../assets/proprty.jpg'
import TwitchImg from '../assets/twitch.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8 '>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={CryptoImg} title="Crypto App"/>
        <ProjectItem img={NetflixImg} title="Property App"/>
        <ProjectItem img={PropertyImg} title="Netflix App"/>
        <ProjectItem img={TwitchImg} title="Twitch App"/>
      </div>
    </div>
   )
}

export default Projects
