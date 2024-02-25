import React from 'react'
import leo from '../assets/leo.jpg';
import gogh from '../assets/gogh.jpg';
import rembr from '../assets/rembrandt.jpg';
import pablo from '../assets/pablo.jpg';


const Artists = () => {
  return (
    <div className='min-h-screen '>
      <h2 className='text-white text-5xl p-12 line'>Trending Artists</h2>

      <div className='flex items-center justify-start gap-8 px-12 py-8'>
          <div className='flex flex-col gap-4'>
          <img src = {leo} className='w-72 h-72 object-cover shadow-lg shadow-black duration-500 ease-in hover:opacity-50' />
          <h2 className='text-white text-3xl text-center'>Leonardo da vinci</h2>
          <span className='text-center text-[#C70039] text-4xl'>1452 - 1519</span>
          </div>

          <div className='flex flex-col gap-4'>
          <img src = {gogh} className='w-72 h-72 object-cover shadow-lg shadow-black duration-500 ease-in hover:opacity-50'/>
          <h2 className='text-white text-3xl text-center'>Vincent van gogh</h2>
          <span className='text-center text-[#C70039] text-4xl'>1853 - 1890</span>
          </div>
          
          <div className='flex flex-col gap-4'>
          <img src = {rembr} className='w-72 h-72 object-cover shadow-lg shadow-black duration-500 ease-in hover:opacity-50'/>
          <h2 className='text-white text-3xl text-center'>Rembrandt</h2>
          <span className='text-center text-[#C70039] text-4xl'>1606 - 1669</span>
          </div>

          <div className='flex flex-col gap-4'>
          <img src = {pablo} className='w-72 h-72 object-cover shadow-lg shadow-black duration-500 ease-in hover:opacity-50'/>
          <h2 className='text-white text-3xl text-center'>Pablo Picasso</h2>
          <span className='text-center text-[#C70039] text-4xl'>1881 - 1973</span>
          </div>
          
      </div>

      <button className='bg-transparent text-white border-2 border-[#C70039] py-4 px-12 text-2xl ml-12 cursor-pointer rounded-md mt-8 duration-1000 ease hover:bg-[#C70039]'>Discover all artists</button>
    </div>
  )
}

export default Artists