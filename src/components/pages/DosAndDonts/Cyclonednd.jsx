import React from "react";
import { Link } from "react-router-dom";

const Cyclonednd = () => {
  const menu = [
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
    ["BOOKLET", "/bookletdnd"],
  ];

  return (
    <div>
      <p className="bg-teal-600 text-center text-white font-bold px-3 py-2">
        The 'Do's and Don't' provided by NDMA are as follows:
      </p>

      <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          <aside className="w-full lg:w-70 flex-shrink-0">
            <div className="border border-gray-300">
              <h2 className="bg-teal-600 text-white font-bold text-lg px-3 py-2">
                Do's and Don'ts
              </h2>

              {menu.map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  className="flex items-center px-3 py-3 border-b border-gray-200 hover:bg-gray-100"
                >
                  <span className="text-sm">{name}</span>
                </Link>
              ))}
            </div>
          </aside>

          <main className="flex-1 min-w-0">

            <h1 className="text-2xl font-bold text-green-700 mb-4">
              Do's and Don'ts
            </h1>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Before the Cyclone Season
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Check the house; secure loose and carry out repairs of doors and windows.</li>
              <li>Remove dead branches or dying trees close to the house.</li>
              <li>Keep a list of emergency telephone numbers.</li>
              <li>Keep some wooden boards ready so that glass windows can be boarded if needed.</li>
              <li>Store non-perishable food, always ready for use in emergency.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-7 mb-2">
              When the Cyclone starts
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Listen to the radio and television for weather warnings.</li>
              <li>Keep monitoring the warnings.</li>
              <li>Pass information to others.</li>
              <li>Ignore rumours and do not spread them.</li>
              <li>Believe only official information.</li>
              <li>When a cyclone is in your area, remain indoors until the cyclone has passed.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-7 mb-2">
              When you are in a cyclone warning get away from low-lying beaches or other low-lying areas
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Provide strong suitable support for outside doors.</li>
              <li>Small and loose things which can fly in strong winds should be safely stored.</li>
              <li>If the centre of the cyclone is passing directly over your house, there will be a lull in the wind.</li>
              <li>Switch off electrical mains in your house.</li>
              <li>Remain calm.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-7 mb-2">
              During a cyclone
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Do not venture out even when the winds appear to calm down.</li>
              <li>Pack essentials for yourself and family to stay safe.</li>
              <li>Head for the nearest shelter or evacuation point if advised.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-7 mb-2">
              When Evacuation is instructed
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Pack essentials for yourself and family to stay safe.</li>
              <li>Head for the nearest shelter or evacuation point.</li>
              <li>Do not worry about your property.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-7 mb-2">
              Post-cyclone measures
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Remain in the shelter until informed that it is safe to return.</li>
              <li>Strictly avoid any downed and live electric wires from power poles.</li>
              <li>Do not drink or drive through flood water.</li>
              <li>Clear debris from your premises immediately.</li>
              <li>Report the correct location to appropriate authorities.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Cyclonednd;