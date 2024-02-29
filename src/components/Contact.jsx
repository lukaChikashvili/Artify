import React from 'react'
import {Facebook, Instagram, Linkedin} from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='min-h-screen  '>
        <motion.h2 initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 1}} className='text-white text-5xl p-12 line'>Contact Us</motion.h2>
        
        <div className='flex flex-col md:flex-row text-white items-center justify-center gap-36 pt-36 pb-36'>
          <motion.div initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 0.4, delay: 1.2}} className='flex flex-col gap-4 text-3xl text-center items-center'>
          <Facebook className='w-36 h-36 duration-1000 ease hover:text-[#C70039]' />
          <p>Connect us from facebook</p>
          </motion.div>
         <motion.div initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 0.4, delay: 1.6}}className='flex flex-col gap-4 text-3xl text-center  items-center'>
         <Instagram  className='w-36 h-36 duration-1000 ease hover:text-green-500'/>
         <p>Connect us from instagram</p>
         </motion.div>
          <motion.div initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 0.4, delay: 1.8}} className='flex flex-col gap-4 text-3xl text-center  items-center'>
          <Linkedin  className='w-36 h-36 duration-1000 ease hover:text-blue-400'/>
          <p>Connect us from Linkedin</p>
          </motion.div>
         
        </div>
    </div>
  )
}

export default Contact