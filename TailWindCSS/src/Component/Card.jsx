import React from 'react'
import img1 from '../assets/img1.webp'

const Card = () => {
  return (
    <div className='hover:flex flex-col bg-sky-400 h-auto rounded-md w-80 border-solid border-2 border-white-500 p-2 relative'>
        <div className='h-50 rounded-lg'>
            <img className='h-45 rounded-lg' src={img1}  />
        </div>
        <div className='flex flex-col text-white absolute overflow-hidden hover:text-pink-500'>
            <h1>Suraj Singh Negi</h1>
            <h1>MERN Stack Developer</h1>
            <h1>Currently Learning Tailwind CSS</h1>
        </div>
    </div>
  )
}

export default Card