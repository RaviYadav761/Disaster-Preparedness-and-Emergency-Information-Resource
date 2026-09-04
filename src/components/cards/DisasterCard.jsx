const DisasterCard = ({ src, text, title, pdf }) => {
  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <div className="relative h-[210px] sm:h-[230px] lg:h-[240px] overflow-hidden bg-slate-100">

        <img
          src={src}
          alt={text}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-700
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute bottom-4 left-4">
          <span className="
            inline-block
            rounded-full
            bg-white/95
            px-3
            py-1.5
            text-xs
            font-bold
            tracking-wide
            text-slate-800
            shadow-sm
          ">
            {text}
          </span>
        </div>

      </div>


      {/* Content */}
      <div className="p-5 sm:p-6">

        <h3 className="
          text-lg
          sm:text-xl
          font-bold
          leading-7
          text-slate-900
          line-clamp-3
          min-h-[84px]
        ">
          {title}
        </h3>


        {/* Divider */}
        <div className="mt-5 mb-4 h-px bg-slate-100" />


        {/* Read More */}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-teal-600
            hover:text-teal-700
            transition-colors
          "
        >
          Read Guidelines

          <span className="
            inline-flex
            items-center
            justify-center
            w-7
            h-7
            rounded-full
            bg-teal-50
            group-hover:bg-teal-600
            group-hover:text-white
            transition-all
          ">
            →
          </span>

        </a>

      </div>

    </article>
  )
}

export default DisasterCard