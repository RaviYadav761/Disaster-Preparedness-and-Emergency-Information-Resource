import { useEffect, useState } from "react"

import Lightning from "../../assets/images/lightning.png"
import ColdWave from "../../assets/images/coldwave.png"
import HeatWave from "../../assets/images/heatwaveimg.png"
import Flood from "../../assets/images/floods.png"
const images = [
  Lightning,
  ColdWave,
  HeatWave,
  Flood
]

const EmergencySlider = () => {

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  useEffect(() => {

    const timer = setInterval(() => {
      nextSlide()
    }, 7000)

    return () => clearInterval(timer)

  }, [])

  return (
    <section className="w-full">

      <div className="relative w-full overflow-hidden">

        {/* IMAGE ONLY */}

        <img
          src={images[current]}
          alt="Emergency"
          className="
            block
            w-full
            h-auto
            object-contain
            transition-opacity
            duration-700
          "
        />

        {/* LEFT BUTTON */}

        <button
          onClick={prevSlide}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            z-10

            w-10
            h-10
            sm:w-12
            sm:h-12

            rounded-full
            bg-black/70
            text-white
            text-3xl

            flex
            items-center
            justify-center

            hover:bg-black
            transition
          "
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}

        <button
          onClick={nextSlide}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            z-10

            w-10
            h-10
            sm:w-12
            sm:h-12

            rounded-full
            bg-black/70
            text-white
            text-3xl

            flex
            items-center
            justify-center

            hover:bg-black
            transition
          "
        >
          ›
        </button>

        {/* DOTS */}

        <div className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          flex
          gap-2
        ">

          {images.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300

                ${
                  current === index
                    ? "w-7 bg-white"
                    : "w-2.5 bg-white/60"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default EmergencySlider