import React from 'react'
import {motion} from 'framer-motion';


const About = () => {
  return (
    <div className='min-h-screen '>

      <div >
          <motion.h2 initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 0.4, delay: 0.5}} className='text-white text-5xl p-12 line'>About Us</motion.h2>
      </div>

      <div className='w-4/5 m-auto flex flex-col gap-8 pt-16 '>
          <motion.p initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 0.5}} className='text-white text-4xl '>At ArtifyGallery, we are passionate about connecting art enthusiasts with talented 
               emerging artists from around the world. Our mission
                is to provide a platform where artists can showcase their unique visions 
               and creations while offering art lovers the opportunity to discover and collect 
               exceptional artwork that resonates with them.</motion.p>
<motion.p initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 0.8}}  className='text-white text-4xl'>Our team at ArtifyGallery is comprised of passionate art lovers and industry professionals who are committed to providing a seamless and enriching experience for both artists and collectors. We strive to uphold the highest standards of integrity, authenticity, and excellence in everything we do, ensuring that every interaction with ArtifyGallery is memorable and rewarding.</motion.p>
      </div>
    </div>
  )
}

export default About