import React from 'react'

const ArtistComp = ({name, img, date}) => {
  return (
     <div className='flex flex-col gap-4 py-12'>
     <img src = {img} className='w-72 h-72 object-cover shadow-lg shadow-black duration-500 ease-in hover:opacity-50' />
     <h2 className='text-white text-3xl text-center'>{name}</h2>
     <span className='text-center text-[#C70039] text-4xl'>{date}</span>
     </div>
  )
}

export default ArtistComp