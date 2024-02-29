import React from 'react'
import art1 from '../assets/art.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art4.jpg';
import About from './About';
import Artists from './Artists';
import Contact from './Contact';
import {motion} from 'framer-motion';





const Home = () => {
  return (
    <>
    <div className= 'flex items-center justify-center  home' >
      <div className='flex flex-col items-center justify-between h-screen  px-36 pb-36'>
         
        
          
           <div className='hidden md:flex items-center justify-center gap-8  '>
           <motion.img initial = {{opacity: 0, translateX: -10}} animate = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 0.5}} src = {art4} className='w-1/4 mt-12 shadow-lg shadow-black duration-500 ease hover:opacity-50' />
           <motion.img initial = {{opacity: 0, translateX: -10}} animate = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 1}} src = {art2} className='w-1/4 mb-36 shadow-lg shadow-black duration-500 ease hover:opacity-50'  />
           <motion.img initial = {{opacity: 0, translateX: -10}} animate = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 1.3}} src = {art1}  className='w-1/4 shadow-lg shadow-black duration-500 ease hover:opacity-50' />
           <motion.img initial = {{opacity: 0, translateX: -10}} animate = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 1.7}} src = {art3} className='w-1/4 mb-36 shadow-lg shadow-black duration-500 ease hover:opacity-50' />
           </div>

           <motion.h1 initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 1.5, delay: 1.5}}  className='text-white text-2xl w-full md:text-4xl md:w-3/5 text-center leading-10'>Discover, Connect, Collect - <span className='text-[#C70039]'>ArtifyGallery,</span> Where Every Brushstroke Tells a Story.</motion.h1>
           <motion.button initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 1, delay: 2}} className='text-white bg-[#C70039] py-2 px-12 text-2xl rounded-md shadow-lg border-2 border-transparent shadow-black mt-12 duration-500 ease-in hover:bg-transparent border-[#C70039]'>Discover Artists</motion.button>
      </div>

 
    </div>

<About />
<Artists />

<Contact />

</>
  )
}

export default Home