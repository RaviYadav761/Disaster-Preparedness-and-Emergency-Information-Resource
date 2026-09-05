import { Link } from "react-router-dom"

import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import IndustrialIcon from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import Fire from "../../../assets/icons/wildfire.png"

const Industrial = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-700">
              Emergency Response During Accidents
            </h1>

          </div>


          {/* Emergency Response */}

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Stay calm and assess the emergency to avoid giving wrong directions during an emergency.
            </li>

            <li>
              Cover face with handkerchief or cloth during evacuation.
            </li>

            <li>
              Leave chemical spills immediately and move towards safe direction.
            </li>

            <li>
              Avoid consuming uncovered food/water if chemicals are released.
            </li>

            <li>
              Change clothes and wash thoroughly after reaching safety.
            </li>

            <li>
              Keep emergency phone numbers available.
            </li>

            <li>
              Follow instructions from Plant, Fire services and official media channels.
            </li>

            <li>
              Provide assistance to injured persons.
            </li>

            <li>
              When others are unable to evacuate, provide assistance from a safe location.
            </li>

          </ul>


          {/* Necessary actions */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Necessary actions
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            The safety measures for chemical disasters can broadly be divided into:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>Emergency response procedures</li>
            <li>Preventive measures during normal times</li>
            <li>Community preparedness activities</li>
            <li>Post-disaster precautions</li>

          </ul>


          {/* General Prevention Measures */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            General Prevention Measures
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Avoid smoking, open flames or sparks in hazardous areas.
            </li>

            <li>
              Maintain awareness of nearby industrial sites.
            </li>

            <li>
              Keep emergency contact numbers easily available.
            </li>

            <li>
              Avoid riding near hazardous chemical facilities when possible.
            </li>

            <li>
              Participate in community safety training programs.
            </li>

            <li>
              Engage in community disaster planning.
            </li>

            <li>
              Develop and practice family emergency plans.
            </li>

            <li>
              Learn basic chemical characteristics and first aid.
            </li>

            <li>
              Ensure availability of personal protective equipment.
            </li>

            <li>
              Follow official warnings and instructions during emergencies.
            </li>

          </ul>


          {/* Community Preparedness */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Community Preparedness
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Identify safe shelter and evacuation routes.
            </li>

            <li>
              Conduct regular safety drills with local industries.
            </li>

            <li>
              Establish neighbourhood warning systems.
            </li>

            <li>
              Create community emergency response teams.
            </li>

            <li>
              Maintain emergency contact information.
            </li>

          </ul>


          {/* Post-Accident Measures */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Post-Accident Measures
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Wait for official all-clear before returning.
            </li>

            <li>
              Follow decontamination procedures if exposed.
            </li>

            <li>
              Seek medical attention for any symptoms.
            </li>

            <li>
              Report any lingering hazards to authorities.
            </li>

            <li>
              Participate in incident debriefing.

            </li>

          </ul>

        </main>


        {/* ================= RIGHT SIDEBAR VALA HAI  ================= */}

        <aside className="w-full lg:w-70 shrink-0">

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
              ["Chemical & Industrial", "/industrial", IndustrialIcon],
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

export default Industrial