import React from "react";
import { Link } from "react-router-dom";

const Earthquakednd = () => {
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
              What to Do During an Earthquake
            </h2>

            <p className="text-sm text-gray-700 mb-3">
              Stay as safe as possible during an earthquake. Be aware that some
              earthquakes are actually foreshocks, and a larger earthquake
              might occur.
            </p>

            <h3 className="font-bold text-gray-800 mt-5 mb-2">
              If indoors
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>DROP to the ground; take COVER by getting under a sturdy table or other piece of furniture and HOLD ON until the shaking stops.</li>
              <li>Stay away from windows, glass, outside doors and walls and anything that could fall.</li>
              <li>Stay in bed if you are there when the earthquake strikes. Hold on and protect your head with a pillow.</li>
              <li>Stay away from doorways.</li>
              <li>Do not use elevators.</li>
              <li>Stay inside until the shaking stops and it is safe to go outside.</li>
              <li>Stay calm and do not panic.</li>
            </ul>

            <h3 className="font-bold text-gray-800 mt-5 mb-2">
              If outdoors
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Move away from buildings, streetlights and utility wires.</li>
              <li>Stay there until the shaking stops.</li>
              <li>Most earthquake-related casualties occur when people move inside buildings.</li>
            </ul>

            <h3 className="font-bold text-gray-800 mt-5 mb-2">
              If in a moving vehicle
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Stop as quickly as safety permits and stay in the vehicle.</li>
              <li>Avoid stopping near buildings, trees, overpasses and utility wires.</li>
              <li>Proceed cautiously once the earthquake has stopped.</li>
            </ul>

            <h3 className="font-bold text-gray-800 mt-5 mb-2">
              If trapped under debris
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Do not light a match.</li>
              <li>Do not move around or kick up dust.</li>
              <li>Cover your mouth with a handkerchief or clothing.</li>
              <li>Tap on a pipe or wall so rescuers can locate you.</li>
              <li>Shout only as a last resort to avoid inhaling dangerous amounts of dust.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Earthquakednd;