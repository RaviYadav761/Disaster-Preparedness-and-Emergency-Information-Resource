import React from 'react'
import Card from '../cards/Card'
import CardData from '../../data/cardData'
import DisasterCarousel from '../sliders/DisasterCarousel'
import EmergencySlider from '../sliders/EmergencySlider'

const HomeSection = () => {


 const cards = CardData

  return (
    <div className='mt-1 w-full min-h-screen bg-green-500'>
      <EmergencySlider/>
       <div className='flex flex-col py-5  items-center justify-center '>
        <h1 className='text-3xl font-semibold text-black'>Citizen Corner</h1>
        <p  className=' font-semibold mb-3 text-sm text-white'>Awareness Topics & Disaster Types</p>
       <div>
<div className='flex gap-5 pt-5  flex-wrap items-center justify-center'>
        {cards.map((value,index)=>(
        <Card key={index}
        src ={value.srcimg}
        title ={value.text}
          link={value.link}
        />

        ))}
        </div>

       </div>
       </div>
       <hr className='border-t border-gray-300 my-8' />
      <DisasterCarousel/>
       
    </div>
  )
}

export default HomeSection