import React from "react";
import { Link } from "react-router-dom";

const Coldwavednd = () => {
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
              Before
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Keep yourself warm and protect yourself from cold weather conditions.</li>
              <li>Keep emergency supplies, medicines and warm clothes ready.</li>
              <li>Listen to weather forecasts and warnings issued by authorities.</li>
              <li>Stay indoors as much as possible during severe cold conditions.</li>
              <li>Keep doors and windows properly closed to prevent cold air from entering.</li>
              <li>Wear several layers of loose clothing to keep yourself warm.</li>
              <li>Cover your head, neck, hands and feet properly.</li>
              <li>Drink sufficient warm fluids to maintain body temperature.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              During
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Avoid unnecessary exposure to extreme cold.</li>
              <li>Keep yourself and family members warm.</li>
              <li>Use heaters carefully and maintain proper ventilation.</li>
              <li>Do not burn coal inside a closed room because it can produce dangerous gases.</li>
              <li>Check on elderly people, children and vulnerable persons.</li>
              <li>Consume warm food and drinks regularly.</li>
              <li>Keep livestock in a protected and warm place.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              In the case of hypothermia
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Get the person into a warm room or shelter.</li>
              <li>Remove any wet clothing.</li>
              <li>Warm the centre of the body first.</li>
              <li>Give warm beverages if the person is conscious.</li>
              <li>Seek medical assistance immediately if the condition is serious.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              Don'ts
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Avoid prolonged exposure to extreme cold.</li>
              <li>Do not ignore symptoms of frostbite or hypothermia.</li>
              <li>Do not consume alcohol to keep yourself warm.</li>
              <li>Do not sleep near an open fire or heater.</li>
              <li>Do not leave children or elderly persons unattended in severe cold.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Coldwavednd;