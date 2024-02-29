import React from 'react'
import { Data } from './Data';
import ArtistComp from './ArtistComp';
import {motion} from 'framer-motion';


const AllArtists = () => {
  return (
    <div>
     <motion.h2 initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 1}} className='text-white text-5xl p-12 line'>All artists</motion.h2>

   <div className='flex flex-wrap items-center justify-center gap-16'>
   {Data.map((artist, i) => {
    return <ArtistComp name = {artist.name} img = {artist.img} date = {artist.date} index = {i} />
   })}
     
   </div>
    </div>
  )
}

export default AllArtists