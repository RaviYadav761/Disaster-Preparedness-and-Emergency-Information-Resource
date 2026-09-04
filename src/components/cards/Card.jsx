import React from 'react'
import { Link } from 'react-router-dom'

// Citizen Corner ka is main banaya hu  card 
const Card = ({src, title,link }) => {
  return (
       <Link to={link}>
    <div className='flex rounded-2xl flex-col
     gap-3 items-center justify-center w-52.5 h-50
       hover:shadow-lg
      hover:-translate-y-1
      transition-all duration-500
      cursor-pointer  bg-white'>
        <div className='rounded-full p-2 
         shadow-sm bg-amber-100 '>
        <img className='w-13' src={src} alt={title} />
        </div>
        <h1 className='text-lg'>{title}</h1>
    </div>
    </Link>
  )
}

export default Card