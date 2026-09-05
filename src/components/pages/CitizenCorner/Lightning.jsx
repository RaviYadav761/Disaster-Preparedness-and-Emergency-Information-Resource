import { Link } from "react-router-dom"
import flash from "../../../assets/icons/flash.png"
import Cyclone from "../../../assets/icons/cycloneLogo.png"
import Drought from "../../../assets/icons/drought.png"
import Earthquakes from "../../../assets/icons/earthquake-icon.png"
import Floods from "../../../assets/icons/flood.png"
import Industrial from "../../../assets/icons/industry.png"
import HeatWave from "../../../assets/icons/sun.png"
import Fire from "../../../assets/icons/wildfire.png"

const Lightning = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}


        <main className="flex-1 min-w-0">

          {/* heading ya ha se hai left side ka jo content hai vo */}

          <div className=" mb-6">

              <h1 className="text-2xl font-bold text-green-700">
                If at home or work
              </h1>

              <h3 className="font-semibold mt-3">
                Preparation
              </h3>

            {/* <img
              src={lightning}
              alt="Lightning"
              className="w-70 h-32 object-cover rounded"
            /> */}

          </div>


          {/* Preparation */}
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>Look for darkening skies and increased wind.</li>

            <li>
              If you hear thunder then you are close enough to be struck by
              lightning.
            </li>

            <li>
              Keep your household appliances unplugged and running electrical
              appliances away from windows.
            </li>

            <li>
              Stay indoors and avoid travel if possible.
            </li>

            <li>
              Close windows and doors, and secure objects outside the home.
            </li>

            <li>
              Avoid using electrical appliances during thunderstorms.
            </li>

            <li>
              Unplug unnecessary electrical appliances once the power supply
              has stopped.
            </li>

            <li>
              Keep away from water or pipes during lightning.
            </li>

            <li>
              Remain indoors until the thunderstorm has completely passed.
            </li>

          </ul>


          {/* Response */}
          <h3 className="font-semibold mt-6 mb-2">
            Response
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              If a building takes a hit, lightning can travel along pipes.
              Keep away from doors, windows, fireplaces, chimneys and other
              objects.
            </li>

            <li>
              Avoid using corded phones and other electrical equipment during
              thunderstorms.
            </li>

            <li>
              Avoid wet areas and plumbing.
            </li>

          </ul>


          {/* If on foot */}
          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            If on foot
          </h2>

          <h3 className="font-semibold mb-2">
            Response
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              Go to a safe shelter immediately and avoid metal structures.
            </li>

            <li>
              Identify a safe place in a low-lying area that is not likely
              to flood.
            </li>

            <li>
              Avoid tall trees and open spaces.
            </li>

            <li>
              Keep away from isolated objects and high ground.
            </li>

            <li>
              Avoid touching metal objects during a thunderstorm.
            </li>

            <li>
              If there is no shelter, crouch down with your feet together
              and minimize contact with the ground.
            </li>

            <li>
              Do not lie flat on the ground.
            </li>

          </ul>


          {/* If travelling */}
          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            If traveling
          </h2>

          <h3 className="font-semibold mb-2">
            Response
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>Get off bicycles, motorcycles or other vehicles.</li>

            <li>Get to a safe shelter.</li>

            <li>
              If boating or swimming, get to land as quickly as possible.
            </li>

            <li>
              During a storm, remain inside until the storm has completely
              passed.
            </li>

            <li>
              If driving, stay inside your vehicle and avoid touching metal
              surfaces.
            </li>

          </ul>


          {/* Treatment */}
          <h2 className="text-2xl font-bold text-green-700 mt-8 mb-3">
            Treatment
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

            <li>
              <strong>IMPORTANT:</strong> If a person is struck by lightning,
              it is safe to touch them.
            </li>

            <li>
              If possible, give first aid immediately.
            </li>

            <li>
              People struck by lightning can suffer serious injuries.
            </li>

            <li>
              Check for breathing, heart rate and signs of shock.
            </li>

            <li>
              If a person is not breathing, begin CPR if trained.
            </li>

            <li>
              Seek medical attention as soon as possible.
            </li>

          </ul>

        </main>


        {/* ================= RIGHT SIDEBAR VALA HAI  ================= */}

    <aside className="w-full lg:w-70 flex-shrink-0">

  {/* Citizen Corner */}

  <div className="border border-gray-300 ">

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

export default Lightning