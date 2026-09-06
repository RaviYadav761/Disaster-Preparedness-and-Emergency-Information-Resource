import React from "react";
import { Link } from "react-router-dom";

const Flooddnd = () => {
  return (
    <div>
      <p className="bg-teal-600 text-center text-white font-bold px-3 py-2">
        The 'Do's and Don't' provided by NDMA are as follows:
      </p>

      <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ================= LEFT SIDEBAR ================= */}

          <aside className="w-full lg:w-70 flex-shrink-0">

            <div className="border border-gray-300">

              <h2 className="bg-teal-600 text-white font-bold text-lg px-3 py-2">
                Do's and Don'ts
              </h2>

              {[
                ["HEATWAVE", "/heatwavednd"],
                ["FLOOD", "/floodsdnd"],
                ["LANDSLIDE", "/landslidednd"],
                ["EARTHQUAKE", "/earthquakednd"],
                ["CYCLONE", "/cyclonednd"],
                ["COLD WAVE / FROST", "/coldwavednd"],
                ["DROUGHT", "/droughtdnd"],
                ["FIRE", "/firednd"],
                ["LIGHTNING", "/lightningdnd"],
                ["TSUNAMI", "/tsunamidnd"],
                ["BOOKLET", "/bookletdnd"]
              ].map(([name, path]) => (

                <Link
                  key={name}
                  to={path}
                  className="flex items-center gap-3 px-3 py-3 border-b border-gray-200 hover:bg-gray-100"
                >
                  <span className="text-sm">
                    {name}
                  </span>
                </Link>

              ))}

            </div>

          </aside>

          {/* ================= RIGHT CONTENT ================= */}

          <main className="flex-1 min-w-0">

            <div className="mb-6">

              <h1 className="text-2xl font-bold text-green-700">
                Flood
              </h1>

              <p className="text-sm text-gray-700 mt-2">
                If a flood is likely to hit your area, you should follow the
                following safety measures to protect yourself and your family.
              </p>

            </div>

            <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
              If a flood is likely to hit your area, you should
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

              <li>
                Listen to the radio/television for information.
              </li>

              <li>
                Be aware that flash flooding can occur. If there is any
                possibility of a flash flood, move immediately to higher ground.
              </li>

              <li>
                Be aware of streams, drainage channels, canyons and other areas
                known to flood suddenly. Flash floods can occur in these areas
                without warning.
              </li>

              <li>
                Turn off all utilities at the main power switch and close the
                main gas valve if evacuation is necessary.
              </li>

            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              If you must prepare to evacuate, you should
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

              <li>
                Secure your home. If you have time, bring in outdoor furniture.
                Move essential items to an upper floor.
              </li>

              <li>
                Turn off utilities at the main switches or valves. Do not touch
                electrical equipment if you are wet or standing in water.
              </li>

            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              If you have to leave your home, remember these evacuation tips
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

              <li>
                Do not walk through moving water. Six inches of moving water
                can make you fall.
              </li>

              <li>
                Do not drive through a flooded area. If you encounter a flooded
                road, turn around and take another route.
              </li>

              <li>
                Do not drive into flooded areas. If your vehicle is surrounded
                by flood water, abandon it and move to higher ground.
              </li>

              <li>
                Do not walk through flowing water. Use a stick to check the
                depth of the water before proceeding.
              </li>

            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              Urban Floods
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Before floods
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

              <li>
                Do not litter waste, plastic bags and other materials in drains.
              </li>

              <li>
                Try to keep a home high and heavy rains continuously.
              </li>

              <li>
                Listen to weather forecasts and follow warnings issued by
                authorities.
              </li>

              <li>
                Evacuate low-lying areas and shift to safer places when advised.
              </li>

              <li>
                Make sure that important documents and emergency supplies are
                kept safely.
              </li>

            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              In the Flood Situation
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

              <li>
                Be at a safe place and stay there until further information.
              </li>

              <li>
                Switch off electrical supply and don't touch open wires.
              </li>

              <li>
                Do not use bathrooms and do not spread rumours.
              </li>

            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              After Floods
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Do's
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

              <li>
                Drink only boiled or treated water.
              </li>

              <li>
                Take clean and safe food.
              </li>

              <li>
                Sprinkle insecticides in waterlogged areas.
              </li>

              <li>
                Switch off the main switches and electrical appliances.
              </li>

              <li>
                Carry your emergency kit and necessary medicines.
              </li>

              <li>
                Avoid contact with flood water whenever possible.
              </li>

              <li>
                Stay away from fallen trees and damaged structures.
              </li>

              <li>
                Take help from local authorities if required.
              </li>

            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              Don'ts
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

              <li>
                Don't walk through flowing water.
              </li>

              <li>
                Don't touch electrical equipment when standing in water.
              </li>

              <li>
                Don't drive through flooded roads.
              </li>

              <li>
                Don't drink untreated or contaminated water.
              </li>

              <li>
                Don't eat food that has come into contact with flood water.
              </li>

              <li>
                Don't reconnect electrical appliances until they have been
                checked by a qualified person.
              </li>

              <li>
                Don't enter damaged buildings without proper inspection.
              </li>

            </ul>

          </main>

        </div>

      </div>
    </div>
  );
};

export default Flooddnd;