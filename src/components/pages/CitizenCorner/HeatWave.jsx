import { Link } from "react-router-dom"

import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import Industrial from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import Fire from "../../../assets/icons/wildfire.png"

const HeatWavePage = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-700">
              Preventive Measures
            </h1>

          </div>


          {/* Preventive Measures */}

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Avoid going out in the sun between 12:00 noon and 3:00 pm.
            </li>

            <li>
              Drink sufficient water regularly, even when not thirsty.
            </li>

            <li>
              Wear lightweight, light-coloured, loose cotton clothes with
              protecting your face, goggles, footwear.
            </li>

            <li>
              Avoid strenuous activities during peak hour heat.
            </li>

            <li>
              Always carry water when travelling.
            </li>

            <li>
              Avoid alcohol, tea, coffee and carbonated drinks which cause dehydration.
            </li>

            <li>
              Avoid high-protein food and stale food.
            </li>

            <li>
              Use damp clothes on head/neck when working outside.
            </li>

            <li>
              Never leave children or pets in parked vehicles.
            </li>

            <li>
              Seek immediate medical help if feeling faint or ill.
            </li>

          </ul>


          {/* Necessary actions */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Necessary actions
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            The actions that need to be taken during heat wave can broadly be divided into:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Daily preventive measures
            </li>

            <li>
              Emergency care for heat stroke
            </li>

            <li>
              Home cooling techniques
            </li>

            <li>
              Special care for vulnerable individuals
            </li>

          </ul>


          {/* Hydration and Cooling */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Hydration and Cooling
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Use ORS or homemade drinks (lime, sugar, brown water beverage) to rehydrate.
            </li>

            <li>
              Keep drinking water in cloths with plenty of drinking water.
            </li>

            <li>
              Keep windows and using curtains during daytime and night ventilation.
            </li>

            <li>
              Use fans, damp cloths and take frequent cool baths.
            </li>

          </ul>


          {/* First Aid for Heat Stroke */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            First Aid for Heat Stroke
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Move person to a cool, shaded area immediately.
            </li>

            <li>
              Wipe body with cool water and remove excess clothing.
            </li>

            <li>
              Give ORS, lemon water or water to rehydrate.
            </li>

            <li>
              Seek immediate hospitalization - heat stroke can be fatal.
            </li>

          </ul>


          {/* Acclimatization */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Acclimatization
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Newcomers from cooler climates need 1 week to adjust.
            </li>

            <li>
              Avoid outdoor exposure during adjustment period.
            </li>

            <li>
              Maintain extra hydration during acclimatization.
            </li>

            <li>
              Gradual exposure helps build tolerance to heat.
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

export default HeatWavePage