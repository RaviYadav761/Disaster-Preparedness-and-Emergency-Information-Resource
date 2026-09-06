import React from "react";
import { Link } from "react-router-dom";

const Droughtdnd = () => {
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
              Do's
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Listen to radio, watch TV and read newspapers for warnings, updates and instructions.</li>
              <li>Practice rainwater harvesting.</li>
              <li>Repair and rejuvenate local water bodies before the rainy season.</li>
              <li>Use drought-resistant and low-water-intensity crop seeds and plants.</li>
              <li>Plant drought-tolerant grasses, shrubs and trees to protect soil moisture.</li>
              <li>Excavate deep pits to help increase groundwater table.</li>
              <li>Use sprinkler method or drip irrigation for crop irrigation.</li>
              <li>Prepare and use crop contingency and complementary plans.</li>
              <li>Participate in water conservation programmes.</li>
              <li>Put used domestic water to use by watering grasses and plants.</li>
              <li>Use a bucket instead of a shower for bathing.</li>
              <li>Use wet clothes to clean and scrub floors instead of running water.</li>
              <li>Construct toilets that need less water for flushing.</li>
              <li>Regularly check tanks, taps and pipes for leakage.</li>
              <li>Reuse water as much as possible.</li>
              <li>Adapt water conservation practices in lifestyle and follow local restrictions on water use.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              Don'ts
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Do not waste water at all.</li>
              <li>Do not cut trees and forests.</li>
              <li>Do not waste rainwater collected on rooftops.</li>
              <li>Do not mess with traditional water sources such as ponds, anicuts, wells and tanks.</li>
              <li>Do not use high water intensity seeds or crops during drought conditions.</li>
              <li>Do not use flowing water during brushing, shaving or washing utensils.</li>
              <li>Avoid using handheld hose for domestic chores.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Droughtdnd;