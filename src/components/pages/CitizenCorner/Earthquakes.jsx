import { Link } from "react-router-dom"

import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import Industrial from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import Fire from "../../../assets/icons/wildfire.png"

const EarthquakesPage = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-700">
              Prepare your family
            </h1>

          </div>


          {/* Before the earthquake */}

          <h3 className="font-semibold mb-2">
            Before the earthquake
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Know the risks from earthquakes in a danger zone for your family and locality.
            </li>

            <li>
              Check and anchor heavy objects in your house.
            </li>

            <li>
              Keep your home safe by storing in a designated place, bottled drinking water,
              packed non-perishable food, torch, first-aid kit and other useful emergency equipment.
            </li>

            <li>
              Store medicines and important documents safely.
            </li>

            <li>
              Teach family members how to turn off electricity, gas, etc.
            </li>

            <li>
              Identify places in the house that can provide cover during an earthquake.
            </li>

            <li>
              Identify an area of your house, garden or yard for family's emergency contact.
            </li>

          </ul>


          {/* Safeguard your house */}

          <h3 className="font-semibold mt-6 mb-2">
            Safeguard your house
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Consider retrofitting your house with earthquake-safety measures.
            </li>

            <li>
              Reinforcing the foundation and frame could make your house quake resistant.
            </li>

            <li>
              Check for loose objects that can be knocked off and hurt you.
            </li>

          </ul>


          {/* During quake */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            During quake
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Take cover. Go under a table or other sturdy furniture; kneel, sit or stay close to the floor.
            </li>

            <li>
              Stay calm.
            </li>

            <li>
              If you are inside your house, stand or sit close to the floor next to a structurally sound interior wall.
            </li>

            <li>
              Do not stand in doorways.
            </li>

            <li>
              Move away from windows, mirrors, bookcases and other unsecured heavy objects.
            </li>

            <li>
              If you are in bed, stay there and cover yourself with a pillow and blankets.
            </li>

            <li>
              Do not run outside if you are inside. Never use the lift.
            </li>

          </ul>


          {/* If outdoors */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            If outdoors
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Move into the open, away from buildings, trees, electric poles and utility wires.
            </li>

            <li>
              If your home is badly damaged, you will have to leave.
            </li>

            <li>
              Avoid places where loose objects could fall.
            </li>

            <li>
              Do not enter damaged buildings.
            </li>

          </ul>


          {/* If in a moving vehicle */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            If in a moving vehicle
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Move to a clear area away from buildings, trees, overpasses, or utility wires, stop and stay in the vehicle.
            </li>

            <li>
              Open the door and stop.
            </li>

            <li>
              Do not leave the vehicle trapped, proceed with caution.
            </li>

            <li>
              After the shaking stops make a right turn from the way to the right.
            </li>

          </ul>


          {/* After the quake */}

          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            After the quake
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              When shaking stops, protect yourself from falling debris.
            </li>

            <li>
              Be prepared for aftershocks.
            </li>

            <li>
              Check for fire hazards and turn off gas and electric circuits if necessary.
            </li>

            <li>
              Help injured or trapped persons.
            </li>

            <li>
              Listen to authorities for updates.
            </li>

            <li>
              Stay out of damaged buildings.
            </li>

            <li>
              If you smell gas or hear hissing noise, open windows and quickly leave the building.
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

export default EarthquakesPage