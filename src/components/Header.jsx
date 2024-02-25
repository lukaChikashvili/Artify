import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className=' text-white  w-full flex items-center justify-between py-8 px-16 text-2xl '>
      <div className="logo">
          <h2 className='text-4xl'><span className='text-[#C70039]'>Artify</span>Gallery</h2>
      </div>

   <nav className='hidden md:flex gap-8 '>
          <Link to = "/"  >Home</Link>
          <Link to = "/">Artists</Link>
          <Link to = "/">ArtWork</Link>
          <Link to = "/">Blog</Link>
          <Link to = "/">Contact</Link>
          </nav>
    </div>
  )
}

export default Header