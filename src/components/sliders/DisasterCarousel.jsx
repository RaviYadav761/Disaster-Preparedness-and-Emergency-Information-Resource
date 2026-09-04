import { useEffect, useState } from "react"
import DisasterCard from "../cards/DisasterCard"
import DisasterData from "../../data/disasterData"

const DisasterCarousel = () => {
  const [current, setCurrent] = useState(3)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isTransition, setIsTransition] = useState(true)

  // Responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Clone cards
  const clonedCards = [
    ...DisasterData.slice(-cardsPerView),
    ...DisasterData,
    ...DisasterData.slice(0, cardsPerView),
  ]

  const nextSlide = () => {
    setIsTransition(true)
    setCurrent((prev) => prev + 1)
  }

  const prevSlide = () => {
    setIsTransition(true)
    setCurrent((prev) => prev - 1)
  }

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
      setIsTransition(true)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  // Seamless reset
  const handleTransitionEnd = () => {
    // Last clone reached
    if (current >= DisasterData.length + cardsPerView) {
      setIsTransition(false)
      setCurrent(cardsPerView)
    }

    // First clone reached
    if (current < cardsPerView) {
      setIsTransition(false)
      setCurrent(DisasterData.length + cardsPerView - 1)
    }
  }

  // Dot position
  const activeDot =
    (current - cardsPerView + DisasterData.length) %
    DisasterData.length

  return (
    <div className="relative w-full max-w-6xl mx-auto px-10 sm:px-12">

   {/* Section Title */}
      <div className="relative text-center mb-10 mt-10 ">

        {/* Background Text */}
        <span className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-7
          whitespace-nowrap
          text-4xl
          sm:text-5xl
          font-bold
          text-slate-200
          pointer-events-none
        ">
          Our Guidelines
        </span>

        {/* Small Title */}
        <span className="
          relative
          z-10
          text-xs
          sm:text-sm
          font-bold
          text-slate-900
        ">
          Our Guidelines
        </span>

      </div>






      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          z-20
          w-9 h-9
          sm:w-11 sm:h-11
          rounded-full
          bg-white
          shadow-lg
          flex items-center justify-center
          text-teal-600
          text-xl
          hover:bg-teal-50
          transition
        "
      >
        ←
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden">

        {/* TRACK */}
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            isTransition
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            width: `${(clonedCards.length * 100) / cardsPerView}%`,
            transform: `translateX(-${
              current * (100 / clonedCards.length)
            }%)`,
          }}
        >

          {clonedCards.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{
                width: `${100 / clonedCards.length}%`,
              }}
            >
              <DisasterCard
                src={item.srcimg}
                text={item.text}
                title={item.title}
                pdf={item.pdf}
              />
            </div>
          ))}

        </div>

      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          z-20
          w-9 h-9
          sm:w-11 sm:h-11
          rounded-full
          bg-white
          shadow-lg
          flex items-center justify-center
          text-teal-600
          text-xl
          hover:bg-teal-50
          transition
        "
      >
        →
      </button>

      {/* DOTS */}
      <div className="flex justify-center items-center gap-2 mt-7">

        {DisasterData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransition(true)
              setCurrent(cardsPerView + index)
            }}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300
              ${
                activeDot === index
                  ? "w-7 bg-teal-600"
                  : "w-2.5 bg-slate-300"
              }
            `}
          />
        ))}

      </div>

    </div>
  )
}

export default DisasterCarousel