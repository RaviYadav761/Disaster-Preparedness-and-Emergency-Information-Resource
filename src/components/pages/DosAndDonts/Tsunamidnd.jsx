import React from "react";
import { Link } from "react-router-dom";

const Tsunamidnd = () => {
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

            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Do's and Don'ts
            </h1>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Before
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Continue to learn about tsunamis and their warning signs.</li>
              <li>Educate yourself and your family about tsunami risks.</li>
              <li>Prepare an emergency kit and make a family communication plan.</li>
              <li>Know the height of your area above sea level and the distance from the coast.</li>
              <li>If you are near the coast, familiarize yourself with local evacuation procedures.</li>
              <li>If an earthquake occurs near you, move inland or to higher ground when necessary.</li>
              <li>Know your community's warning system and evacuation plan.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              During
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Stay calm. Do not panic.</li>
              <li>Evacuate immediately to a safe place when directed by government officials.</li>
              <li>Move inland to higher ground immediately.</li>
              <li>Stay away from the beach.</li>
              <li>Save yourself, not your possessions.</li>
              <li>Help those who may require special assistance, including elderly people and persons with disabilities.</li>
              <li>If you are in the water, grab onto something that floats.</li>
              <li>If you are in a boat, move away from the coast and head out to sea.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              After
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Return home only after officials say it is safe.</li>
              <li>Avoid areas that were affected by a disaster.</li>
              <li>Stay away from debris in the water.</li>
              <li>Check yourself for injuries and get first aid if needed.</li>
              <li>If someone needs to be rescued, call professionals with the right equipment.</li>
              <li>Use radio or television for the latest updates.</li>
              <li>Stay out of any building that has been damaged by a tsunami.</li>
              <li>Use caution when re-entering buildings or homes.</li>
              <li>To avoid injury, wear protective clothing and be cautious when cleaning up.</li>
              <li>Do not use contaminated water.</li>
              <li>Leave the area again whenever you are asked to evacuate.</li>
              <li>Do not spread or believe rumours.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Tsunamidnd;