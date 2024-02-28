import React from 'react'
import { Data } from './Data';
import ArtistComp from './ArtistComp';

const AllArtists = () => {
  return (
    <div>
     <h2 className='text-white text-5xl p-12 line'>All artists</h2>

   <div className='flex flex-wrap items-center justify-center gap-16'>
   {Data.map((artist) => {
    return <ArtistComp name = {artist.name} img = {artist.img} date = {artist.date}/>
   })}
     
   </div>
    </div>
  )
}

export default AllArtists