import React from 'react'

const Card = ({src, title}) => {
  return (
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
  )
}

export default Card