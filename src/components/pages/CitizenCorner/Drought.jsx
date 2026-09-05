import { Link } from "react-router-dom"

import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import Industrial from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import Fire from "../../../assets/icons/wildfire.png"

const DroughtPage = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-700">
              Drought History in Jharkhand
            </h1>

          </div>


          {/* State Example */}

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>2001: 72 blocks in 11 districts affected.</li>
            <li>2002: 24 districts affected.</li>
            <li>2003: 11 districts and 1,263 blocks affected.</li>
            <li>2004: 11 blocks in 9 districts affected.</li>
            <li>2005: 20 blocks affected.</li>
            <li>2006: 11 districts affected.</li>
            <li>2015: 23 districts affected.</li>
            <li>2019: 29 blocks in 11 districts declared drought-affected.</li>

          </ul>


          {/* Current Situation */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Current Situation
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              28% rainfall deficit in 2019 monsoon season.
            </li>

            <li>
              7 districts recorded 40% rain shortage (Jharkhand was at 55% deficit).
            </li>

            <li>
              Only 34% of agricultural land could be irrigated in 2019.
            </li>

            <li>
              40% of crop yields destroyed due to drought conditions.
            </li>

          </ul>


          {/* Necessary actions */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Necessary actions
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            The actions needed to address drought can broadly be divided into:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>Water conservation measures</li>
            <li>Agricultural adaptation</li>
            <li>Government interventions</li>
            <li>Community preparedness</li>

          </ul>


          {/* Water Conservation */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Water Conservation
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Construct and maintain traditional water bodies for rainwater harvesting.
            </li>

            <li>
              Reduce residential water losses.
            </li>

            <li>
              Implement efficient water storage and irrigation.
            </li>

            <li>
              Promote community-based water management.

            </li>

          </ul>


          {/* Agricultural Adaptations */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Agricultural Adaptations
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Shift to drought-resistant crop varieties.
            </li>

            <li>
              Adopt micro-irrigation techniques.
            </li>

            <li>
              Practice crop rotation and mixed cropping.
            </li>

            <li>
              Reduce dependence on single-crop cultivation.

            </li>

          </ul>


          {/* Government Intervention */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Government Intervention
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              MGNREGS programs for water conservation infrastructure.
            </li>

            <li>
              Targeted cash distribution (90% affected by 2017).
            </li>

            <li>
              Drought relief measures in affected blocks.
            </li>

            <li>
              Procurement in irrigation facilities (only 67% had been currently irrigated).

            </li>

          </ul>


          {/* Community Preparedness */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Community Preparedness
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Develop village-level water management plans.
            </li>

            <li>
              Promote alternative livelihoods during drought years.
            </li>

            <li>
              Establish early warning systems for water scarcity.
            </li>

            <li>
              Conduct regular maintenance of water storage structures.

            </li>

          </ul>


          {/* Challenges */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Challenges
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>High climate variability and poor irrigation.</li>
            <li>Low wages under MGNREGS.</li>
            <li>Lack of community participation in water projects.</li>
            <li>Traditional water bodies drying up due to neglect.</li>

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

export default DroughtPage