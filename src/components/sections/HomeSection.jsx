import React, { useEffect } from 'react'
import Card from '../cards/Card'
import CardData from '../../data/cardData'
import DisasterCarousel from '../sliders/DisasterCarousel'
import EmergencySlider from '../sliders/EmergencySlider'

const HomeSection = () => {
  const cards = CardData

  // START: Homepage ad script
  useEffect(() => {
    const configScript = document.createElement('script')
    configScript.type = 'text/javascript'
    configScript.textContent = `
      window.atOptions = {
        'key' : '74ffd3e115f253edd94e5d5028d8c02e',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `
    document.body.appendChild(configScript)

    const adScript = document.createElement('script')
    adScript.src = 'https://www.highrevenueformat.com/74ffd3e115f253edd94e5d5028d8c02e/invoke.js'
    adScript.async = true
    adScript.defer = true
    document.body.appendChild(adScript)

    return () => {
      document.body.removeChild(configScript)
      document.body.removeChild(adScript)
    }
  }, [])
  // END: Homepage ad script

  return (
    <div className='mt-1 w-full min-h-screen bg-green-500'>
      <EmergencySlider/>

      <div className='flex flex-col py-5 items-center justify-center'>
        <h1 className='text-3xl font-semibold text-black'>Citizen Corner</h1>
        <p className='font-semibold mb-3 text-sm text-white'>Awareness Topics & Disaster Types</p>

        <div className='flex gap-5 pt-5 flex-wrap items-center justify-center'>
          {cards.map((value, index) => (
            <Card
              key={index}
              src={value.srcimg}
              title={value.text}
              link={value.link}
            />
          ))}
        </div>
      </div>

      {/* START: Homepage ad container */}
      <div className='flex justify-center py-6'>
        <div className='w-full max-w-[320px] rounded-xl border border-emerald-800/20 bg-white/10 p-3 shadow-md backdrop-blur-sm'>
          <div className='mb-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/70'>
            Sponsored
          </div>
          <div className='flex min-h-[250px] items-center justify-center overflow-hidden rounded-lg bg-white/60'>
            <div id='ad-slot-home' className='w-full'></div>
          </div>
        </div>
      </div>
      {/* END: Homepage ad container */}

      <hr className='border-t border-gray-300 my-8' />
      <DisasterCarousel/>

      <footer className="bg-teal-600 mt-3 text-white text-center py-4">
        <p className="text-sm">
          Disaster Management & Awareness | Stay Safe, Stay Prepared
        </p>
      </footer>
    </div>
  )
}

export default HomeSection