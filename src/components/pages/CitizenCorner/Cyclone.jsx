import { Link } from "react-router-dom"

import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import Industrial from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import Fire from "../../../assets/icons/wildfire.png"

const CyclonePage = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-700">
              Before the Cyclone season
            </h1>

          </div>


          {/* Before the Cyclone season */}

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Check the house, loose objects that can carry away during strong winds.
            </li>

            <li>
              Remove dead branches or dying trees close to the house.
            </li>

            <li>
              Anchor removable objects such as lumber piles, loose tin sheets,
              loose bricks, garbage cans, and other objects.
            </li>

            <li>
              Keep your household appliances unplugged and running electrical
              appliances away from windows.
            </li>

            <li>
              Keep a portable battery-powered radio, torches and emergency
              equipment ready.
            </li>

            <li>
              Keep drinking water and essential supplies ready.
            </li>

            <li>
              Keep some extra batteries for the radio.
            </li>

            <li>
              Keep some dry and nutritious food always ready for use in emergency.
            </li>

          </ul>


          {/* Necessary actions */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Necessary actions
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            The actions that need to be taken in the event of a cyclone that can broadly be divided into:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Immediately before the cyclone once.
            </li>

            <li>
              When cyclone alerts and warnings are communicated.
            </li>

            <li>
              When evacuation is advised.
            </li>

            <li>
              When the cyclone has crossed the coast.
            </li>

          </ul>


          {/* When the cyclone starts */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            When the cyclone starts
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Listen to the radio (All India Radio gives weather warnings).
            </li>

            <li>
              Keep monitoring the news.
            </li>

            <li>
              Pay attention to official information.
            </li>

            <li>
              Ignore rumours and do not spread them.
            </li>

            <li>
              Remain in the official information.
            </li>

            <li>
              When a cyclone alert is for your area, continue monitoring the radio
              and stay alert.
            </li>

            <li>
              Stay alert for the next 24 hours.
            </li>

            <li>
              When you are asked to evacuate, get away from low-lying areas.
            </li>

            <li>
              Leave early before your way to high ground or cyclone shelter gets blocked.
            </li>

            <li>
              If your house is insecure, stay on high ground and take shelter in the
              safe part of the house.
            </li>

            <li>
              Board up glass windows or put them behind in place.
            </li>

            <li>
              Provide strong shutters for doors.
            </li>

            <li>
              Store drinking water and essential supplies in a safe place.
            </li>

          </ul>


          {/* When Evacuation is instructed */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            When Evacuation is instructed
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Pack essentials for yourself and your family to last a few days.
            </li>

            <li>
              Head for the proper shelter or evacuation point indicated for your area.
            </li>

            <li>
              Do not worry about your property.
            </li>

            <li>
              At the shelter follow instructions of the person in charge.
            </li>

            <li>
              Remain in the shelter until the authorities give the all-clear.
            </li>

          </ul>


          {/* Post-cyclone measures */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Post-cyclone measures
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              You should remain in the shelter until informed that you can return to your home.
            </li>

            <li>
              Do not go around sightseeing after the cyclone.
            </li>

            <li>
              Stay away from fallen and dangling wires from poles.
            </li>

            <li>
              If you find a fallen wire, keep away from it.
            </li>

            <li>
              Check your home for structural damage carefully.
            </li>

            <li>
              Report the correct losses to appropriate authorities.
            </li>

          </ul>

        </main>


        {/* ================= RIGHT SIDEBAR VALA HAI  ================= */}

        <aside className="w-full lg:w-70 flex-shrink-0">

          {/* Citizen Corner */}

          <div className="border border-gray-300">

            <h2 className="bg-teal-600 text-white font-bold px-3 py-2">
              Citizen Corner
            </h2>

            {[
              ["Lightning", "/lightning", flash],
              ["Cyclone", "/cyclone", Cyclone],
              ["Drought", "/drought", Drought],
              ["Earthquakes", "/earthquakes", Earthquakes],
              ["Floods", "/floods", Floods],
              ["Chemical & Industrial", "/industrial", Industrial],
              ["Heat Wave", "/heat-wave", HeatWave],
              ["Fire", "/fire", Fire],
            ].map(([name, path, icon]) => (

              <Link
                key={name}
                to={path}
                className="flex items-center gap-3 px-3 py-3 border-b border-gray-200 hover:bg-gray-100"
              >

                <img
                  src={icon}
                  alt={name}
                  className="w-5 h-5 object-contain"
                />

                <span className="text-sm">
                  {name}
                </span>

              </Link>

            ))}

          </div>

        </aside>

      </div>

    </div>
  )
}

export default CyclonePage