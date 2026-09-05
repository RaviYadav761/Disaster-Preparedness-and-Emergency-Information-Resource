import { Link } from "react-router-dom"

import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import Industrial from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import Fire from "../../../assets/icons/wildfire.png"

const FloodsPage = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-700">
              Before Flooding Occurs
            </h1>

          </div>


          {/* Before Flooding Occurs */}

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              All family members should know safe routes to nearest designated safe house.
            </li>

            <li>
              If flood-prone, use structures by local building up to higher known
              flood evacuation community point.
            </li>

            <li>
              Prepare an emergency kit containing:
            </li>

            <li className="ml-5">
              Portable radio, torch and spare batteries.
            </li>

            <li className="ml-5">
              Fresh water, dry food, clothes, medicines, blankets, candles and matches.
            </li>

            <li className="ml-5">
              Waterproof bags for valuable items and important documents.
            </li>

            <li className="ml-5">
              First aid kit, manual and sewing rope.
            </li>

          </ul>


          {/* Necessary actions */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Necessary actions
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            The actions that need to be taken in the event of flood threat can broadly be divided into:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Preparations before flood occurs
            </li>

            <li>
              When flood alerts and warnings are issued
            </li>

            <li>
              When evacuation is announced
            </li>

            <li>
              During and after flood disasters
            </li>

          </ul>


          {/* When Flood Warnings Are Issued */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            When Flood Warnings Are Issued
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Monitor local radio/TV for official warnings and advice.
            </li>

            <li>
              Ignore rumours and avoid panic.
            </li>

            <li>
              Prepare dry food, drinking water and essential clothing.
            </li>

            <li>
              Move livestock, agricultural equipment to higher ground.
            </li>

            <li>
              Plan which household items to elevate or secure.
            </li>

            <li>
              Verify contacts for emergency list.
            </li>

          </ul>


          {/* During Floods */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            During Floods
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Drink only boiled or disinfected water.
            </li>

            <li>
              Keep food covered, particularly meat.
            </li>

            <li>
              Use home remedies, if necessary, or clean water for drinking,
              use ORS from health workers.
            </li>

            <li>
              Ensure children eat regularly.
            </li>

            <li>
              Do not enter flowing water with electric poles and wires.
            </li>

            <li>
              Cooperate with relief officials and volunteers.
            </li>

          </ul>


          {/* When Evacuation is Instructed */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            When Evacuation is Instructed
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Pack warm clothing, medicine, documents and valuables in waterproof bags.
            </li>

            <li>
              Take your emergency kit.
            </li>

            <li>
              Inform local volunteers of your evacuation destination.
            </li>

            <li>
              Board at a known safe place or higher ground if possible.
            </li>

            <li>
              Turn off power supply.
            </li>

            <li>
              Place sandbags in toilets and drains to prevent backflow.
            </li>

            <li>
              Lock homes and go to designated evacuation areas.
            </li>

            <li>
              Never enter water of unknown depth or current.
            </li>

          </ul>


          {/* Post-Flood Measures */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Post-Flood Measures
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Continue monitoring official updates via radio.
            </li>

            <li>
              Keep children away from floodwaters.
            </li>

            <li>
              Avoid walking in floodwater; it may contain infectious substances
              and electrical hazards.
            </li>

            <li>
              Do not use electrical equipment in flooded areas.
            </li>

            <li>
              Discard any food that comes in contact with floodwater.
            </li>

            <li>
              Boil tap water or use chlorine tablets before drinking.
            </li>

            <li>
              Do not enter drains and other hazards in flood debris.
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

export default FloodsPage