import React from 'react'
import {Facebook, Instagram, Linkedin} from 'lucide-react';


const Contact = () => {
  return (
    <div className='min-h-screen  '>
        <h2 className='text-white text-5xl p-12 line'>Contact Us</h2>
        
        <div className='flex flex-col md:flex-row text-white items-center justify-center gap-36 pt-36 pb-36'>
          <div className='flex flex-col gap-4 text-3xl text-center items-center'>
          <Facebook className='w-36 h-36 duration-1000 ease hover:text-[#C70039]' />
          <p>Connect us from facebook</p>
          </div>
         <div className='flex flex-col gap-4 text-3xl text-center  items-center'>
         <Instagram  className='w-36 h-36 duration-1000 ease hover:text-green-500'/>
         <p>Connect us from instagram</p>
         </div>
          <div className='flex flex-col gap-4 text-3xl text-center  items-center'>
          <Linkedin  className='w-36 h-36 duration-1000 ease hover:text-blue-400'/>
          <p>Connect us from Linkedin</p>
          </div>
         
        </div>
    </div>
  )
}

export default Contact