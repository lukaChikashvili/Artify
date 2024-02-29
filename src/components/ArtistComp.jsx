import React from 'react'
import {motion} from 'framer-motion';


const ArtistComp = ({name, img, date, index}) => {
  return (
     <motion.div initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 0.4, delay: index * 0.25}}  className='flex flex-col gap-4 py-12'>
     <img src = {img} className='w-72 h-72 object-cover shadow-lg shadow-black duration-500 ease-in hover:opacity-50' />
     <h2 className='text-white text-3xl text-center'>{name}</h2>
     <span className='text-center text-[#C70039] text-4xl'>{date}</span>
     </motion.div>
  )
}

export default ArtistComp