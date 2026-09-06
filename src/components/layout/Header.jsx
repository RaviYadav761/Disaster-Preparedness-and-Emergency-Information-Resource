import React from "react";
import headerImage from "../../assets/headerimg.png";
import { NavLink } from "react-router-dom";

const Header = ({ setBg }) => {
  return (
    <header className="w-full">

      {/* Top Bar */}
      <div className="w-full min-h-10 flex items-center justify-between gap-2 px-2 sm:px-6 lg:px-25 py-1">

        <p className="text-xs sm:text-lg font-semibold text-red-500 whitespace-nowrap">
          Helpline : 1916
        </p>

        <button
          className="
            px-2 py-1
            sm:px-3 sm:py-1
            text-[10px] sm:text-sm
            bg-green-400
            rounded
            text-black
            border border-red-500
            font-semibold
            whitespace-nowrap
            cursor-pointer
          "
        >
          WHATSAPP Join
        </button>

      </div>

      {/* Header Image */}
      <div className="w-full h-16 sm:h-22 border-2 sm:border-3 bg-blue-400 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={headerImage}
          alt="Disaster Awareness"
        />
      </div>

      {/* Navigation */}
      <nav
        className="
          w-full
          flex flex-wrap
          justify-center
          items-center
          gap-1
          sm:gap-2
          px-1 sm:px-3
          py-1
        
        "
      >

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded px-2 py-1 sm:px-3 sm:py-2
             text-[10px] sm:text-sm
             whitespace-nowrap transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          Home
        </NavLink>

        {/* Weather */}
        <NavLink
          to="/weather"
          className={({ isActive }) =>
            `rounded px-2 py-1 sm:px-3 sm:py-2
             text-[10px] sm:text-sm
             whitespace-nowrap transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          Weather
        </NavLink>

        {/* Do's & Don'ts */}
        <NavLink
          to="/Dndmain"
          className={({ isActive }) =>
            `rounded px-2 py-1 sm:px-3 sm:py-2
             text-[10px] sm:text-sm
             whitespace-nowrap transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          Do's & Don'ts
        </NavLink>

        {/* Emergency Helplines */}
        <NavLink
          to="/emergencyhelplinesNav"
          className={({ isActive }) =>
            `rounded px-2 py-1 sm:px-3 sm:py-2
             text-[10px] sm:text-sm
             whitespace-nowrap transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          Emergency Helplines
        </NavLink>

        {/* Background Buttons */}
        <div className="flex gap-1 sm:gap-2">

          {/* <button
            onClick={() => setBg("bg-black")}
            className="
              bg-black
              text-white
              rounded
              px-2 py-1
              sm:px-3
              text-[10px] sm:text-sm
              whitespace-nowrap
            "
          >
            Black
          </button> */}

          <button
            onClick={() => setBg("bg-white")}
            className="
              bg-white
              text-black
              rounded
              px-2 py-1
              sm:px-3
              text-[10px] sm:text-sm
              whitespace-nowrap
            "
          >
            White
          </button>

          <button
            onClick={() => setBg("bg-green-400")}
            className="
              bg-green-400
              text-black
              rounded
              px-2 py-1
              sm:px-3
              text-[10px] sm:text-sm
              whitespace-nowrap
            "
          >
            Green
          </button>

          {/* <button
            onClick={() => setBg("bg-blue-400")}
            className="
              bg-blue-400
              text-black
              rounded
              px-2 py-1
              sm:px-3
              text-[10px] sm:text-sm
              whitespace-nowrap
            "
          >
            Blue
          </button> */}

        </div>

      </nav>

    </header>
  );
};

export default Header;