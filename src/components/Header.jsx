import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, Palette} from 'lucide-react';


const Header = () => {
  return (
    <div className=' text-white  w-full flex items-center justify-between py-8 px-16 text-2xl '>
      <div className="logo">
          <h2 className='text-4xl'><span className='text-[#C70039]'>Artify</span>Gallery</h2>
      </div>

   <nav className='hidden md:flex gap-8 '>
        <div className='flex items-center gap-4'>
          <HomeIcon className='text-red-500' />
          <Link to = "/"  >Home</Link>
          </div>

          <div className='flex items-center gap-4'>
          <Palette className='text-red-500' />
          <Link to = "/artists">Artists</Link>
          </div>
          
         

          </nav>
    </div>
  )
}

export default Header