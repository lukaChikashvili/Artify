import React from 'react'
import art1 from '../assets/art.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art4.jpg';



const Home = () => {
  return (
    <div className= 'flex items-center justify-center h-screen home' >
      <div className='flex flex-col items-center justify-between  px-36 pb-36'>
         
        
          
           <div className='flex items-center justify-center gap-8 '>
           <img src = {art4} className='w-1/4 mt-12 shadow-lg shadow-black' />
           <img src = {art2} className='w-1/4 mb-36 shadow-lg shadow-black' />
           <img src = {art1}  className='w-1/4 shadow-lg shadow-black' />
           <img src = {art3} className='w-1/4 mb-36 shadow-lg shadow-black' />
           </div>

           <h1 className='text-white text-4xl w-3/5 text-center leading-10'>Discover, Connect, Collect - <span className='text-[#C70039]'>ArtifyGallery,</span> Where Every Brushstroke Tells a Story.</h1>
      </div>
    </div>
  )
}

export default Home