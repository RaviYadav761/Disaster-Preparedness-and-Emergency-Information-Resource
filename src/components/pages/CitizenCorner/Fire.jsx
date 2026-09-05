import { Link } from "react-router-dom"

import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import Industrial from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import FireIcon from "../../../assets/icons/wildfire.png"

const Fire = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-700">
              Before a Fire
            </h1>

            <h3 className="font-semibold mt-3">
              Prevention
            </h3>

          </div>


          {/* Prevention */}

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>School should educate children about proper safety checks.</li>
            <li>Ensure sufficient fire water are available.</li>
            <li>Identify potential fire hazards and ignition sources.</li>
            <li>Train staff members in fire safety procedures.</li>
            <li>Educate students about fire safety drills and actions.</li>
            <li>Develop and display emergency plans and fire notices.</li>
            <li>Maintain electrical equipment and check wiring regularly.</li>
            <li>Keep kitchen in secure, safe locations.</li>
            <li>Maintain adequate fire fighting equipment.</li>
            <li>Ensure fire exits and escape routes remain unobstructed.</li>
            <li>Keep all fire safety equipment regularly serviced.</li>
            <li>Conduct regular fire drills.</li>
            <li>Implement recommendations from local fire brigade.</li>

          </ul>


          {/* During a Fire */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            During a Fire
          </h2>

          <h3 className="font-semibold mb-2">
            Response
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>Move to an open area immediately.</li>
            <li>Contact fire brigade, police, ambulance and emergency services.</li>
            <li>Call the nearest fire station.</li>
            <li>Call Fire Brigade immediately.</li>
            <li>Maintain calm and avoid panic among children and staff.</li>
            <li>Use fire extinguisher if trained to do so.</li>
            <li>Stay low to the ground if smoke is present.</li>
            <li>Feel doors for heat before opening.</li>
            <li>Use alternative exits if the primary route is blocked.</li>
            <li>Assemble at pre-arranged location and conduct roll call.</li>
            <li>Contact concerned authorities.</li>
            <li>Do not attempt to fight a large fire.</li>
            <li>Never re-enter a burning building.</li>

          </ul>


          {/* After a Fire */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            After a Fire
          </h2>

          <h3 className="font-semibold mb-2">
            Recovery
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>Do not re-enter the building until authorities allow it.</li>
            <li>Wait for all-clear from authorized safety staff.</li>
            <li>Review and update the fire management plan.</li>
            <li>Reopen and operate only after management approval.</li>
            <li>Implement all fire safety recommendations before reopening.</li>
            <li>Conduct damage assessment with professionals.</li>
            <li>Provide counselling support if needed.</li>
            <li>Document incident for future reference and training.</li>

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
              ["Chemical & Industrial", "/industrial", Industrial],
              ["Heat Wave", "/heat-wave", HeatWave],
              ["Fire", "/fire", FireIcon],
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

export default Fire