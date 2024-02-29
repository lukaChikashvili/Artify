import React, { useState } from 'react'
import { Data } from './Data';
import ArtistComp from './ArtistComp';
import {motion} from 'framer-motion';


const AllArtists = () => {

  const [searchQuery, setSearchQuery] = useState('');

  
  const filteredArtists = Data.filter(artist =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='flex items-center justify-between'>

    
     <motion.h2 initial = {{opacity: 0, translateX: -10}} whileInView = {{opacity: 1, translateX: 0}} transition = {{duration: 1, delay: 1}} className='text-white text-5xl p-12 line'>All artists</motion.h2>
     <input type = "text" value = {searchQuery} placeholder='search artists..' className='w-72 py-2 px-4  outline-none rounded-md shadow-lg shadow-black mr-12' onChange={(e) => setSearchQuery(e.target.value)}/>
     </div>
   <div className='flex flex-wrap items-center justify-center gap-16'>
   {filteredArtists.map((artist, i) => {
    return <ArtistComp name = {artist.name} img = {artist.img} date = {artist.date} index = {i} />
   })}
     
   </div>
    </div>
  )
}

export default AllArtists