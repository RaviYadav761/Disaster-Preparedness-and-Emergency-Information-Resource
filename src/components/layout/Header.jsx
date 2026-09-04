import React from "react";
import headerImage from "../../assets/headerimg.png"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   <div className="flex  flex-col bg-green-400  items-center justify-center max-w-full h-42">
   <div className="w-full flex justify-between items-center px-3 sm:px-6 lg:px-[100px] h-10">

  <p className="text-sm sm:text-lg font-semibold text-red-500">
    Helpline : 1916
  </p>

  <button
    className="
      px-2 py-1
      sm:px-3
      text-xs sm:text-sm
      bg-green-400
      rounded
      text-black
      border
      border-red-500
      font-semibold
      whitespace-nowrap
    "
  >
    WHATSAPP Join
  </button>

</div>
    <div className="bg-blue-400 w-full h-22 border-3">
      <img className="w-full h-21" src={headerImage} alt="" />
    </div>
<nav className=" mt-1 mb-1 flex justify-center font-semibold  items-center text-center gap-2">
     <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded px-3 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>
    <NavLink
            to="/a"
            className={({ isActive }) =>
              `rounded px-3 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Disaster Guides
          </NavLink>
             <NavLink
            to="/b"
            className={({ isActive }) =>
              `rounded px-3 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Emergency Helplines
          </NavLink>
</nav>
   </div>
  );
};

export default Header;