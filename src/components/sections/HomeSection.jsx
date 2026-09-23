import React, { useEffect, useRef, useState } from 'react'
import Card from '../cards/Card'
import CardData from '../../data/cardData'
import DisasterCarousel from '../sliders/DisasterCarousel'
import EmergencySlider from '../sliders/EmergencySlider'
import EarthBackground from './EarthBackground'

const HomeSection = () => {
  const cards = CardData
  const adSlotRef = useRef(null)
  const [popupAdLoaded, setPopupAdLoaded] = useState(false)

  // START: Homepage ad script
  // useEffect(() => {
  //   const adSlot = adSlotRef.current
  //   if (!adSlot) return

  //   const configScript = document.createElement('script')
  //   configScript.type = 'text/javascript'
  //   configScript.textContent = `
  //     atOptions = {
  //       'key' : '74ffd3e115f253edd94e5d5028d8c02e',
  //       'format' : 'iframe',
  //       'height' : 250,
  //       'width' : 300,
  //       'params' : {}
  //     };
  //   `
  //   adSlot.appendChild(configScript)

  //   const adScript = document.createElement('script')
  //   adScript.src = 'https://www.highrevenueformat.com/74ffd3e115f253edd94e5d5028d8c02e/invoke.js'
  //   adScript.async = true
  //   adSlot.appendChild(adScript)

  //   return () => {
  //     configScript.remove()
  //     adScript.remove()
  //   }
  // }, [])
  // END: Homepage ad script

  const handlePopupAdClick = () => {
    if (popupAdLoaded) return

    // START: Additional popup ad script
    // const networkScript = document.createElement('script')
    // networkScript.src = 'https://pl31396077.profitableratecpmnetwork.com/9a/e6/e2/9ae6e251038f0b75c8d1f24ec66033f6.js'
    // networkScript.async = false
    // document.body.appendChild(networkScript)
    // setPopupAdLoaded(true)
    // END: Additional popup ad script
  }

  return (
<div className='site-background mt-1 min-h-screen w-full'>
      <EarthBackground />
      <EmergencySlider/>

      <div id='citizen-corner' className='flex flex-col py-5 items-center justify-center'>
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
      {/* <div className='flex justify-center py-6'>
        <div className='w-full max-w-[320px] rounded-xl border border-emerald-800/20 bg-white/10 p-3 shadow-md backdrop-blur-sm'>
          <div className='mb-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/70'>
            Sponsored
          </div>
          <div className='flex min-h-[250px] items-center justify-center overflow-hidden rounded-lg bg-white/60'>
            <div ref={adSlotRef} id='ad-slot-home' className='w-full'></div>
          </div>
        </div>
      </div> */}
      {/* END: Homepage ad container */}

      {/* START: Click-to-open popup ad */}
      {/* <button
        type='button'
        onClick={handlePopupAdClick}
        aria-label='Open advertisement'
        className='pointer-events-auto fixed bottom-5 right-5 z-[9999] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-emerald-700 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:scale-105 hover:bg-emerald-800'
      >
        {popupAdLoaded ? 'Opened' : 'Ad'}
      </button> */}
      {/* END: Click-to-open popup ad */}

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