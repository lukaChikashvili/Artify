import React from 'react'
import leo from '../assets/leo.jpg';
import gogh from '../assets/gogh.jpg';
import rembr from '../assets/rembrandt.jpg';
import pablo from '../assets/pablo.jpg';
import {useNavigate} from 'react-router-dom';



const Artists = () => {
  const artist = [
    {
      id: 1,
      img: leo,
      name: "leonardo da vinci",
      date: "1452 - 1519"
 },

 {
      id: 2,
      img: gogh,
      name: "Vincent van gogh",
      date: "1853 - 1890"
 },

 {
      id: 3,
      img: pablo,
      name: "Pablo Picasso",
      date: "1881 - 1973"
 },

 {
      id: 4,
      img: rembr,
      name: "Rembrandt",
      date: "1606 - 1669"
 }

  ];


  let navigate = useNavigate();
  
  return (
    <div className='min-h-screen py-12'>
      <h2 className='text-white text-5xl p-12 line'>Trending Artists</h2>
      <div className='flex flex-col md:flex-row items-center justify-start gap-8 px-12 py-8'>
       {artist.map((value, i) => (

        
          <div className='flex flex-col gap-4'>
          <img src = {value.img} className='w-72 h-72 object-cover shadow-lg shadow-black duration-500 ease-in hover:opacity-50' />
          <h2 className='text-white text-3xl text-center'>{value.name}</h2>
          <span className='text-center text-[#C70039] text-4xl'>{value.date}</span>
 </div>




       ))}
      
</div>
      <button className='bg-transparent text-white border-2 border-[#C70039] py-4 px-12 text-2xl ml-12 cursor-pointer rounded-md mt-8 duration-1000 ease hover:bg-[#C70039]' onClick={() => navigate('/artists')}>Discover all artists</button>
    </div>
  )
}

export default Artists