import React from "react";
import { Link } from "react-router-dom";

const Lightningdnd = () => {
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
              <li>Cut down or trim trees that may be in danger of falling on your home.</li>
              <li>An important lightning safety guide is the 30-30 rule. After you see lightning, start counting to 30.</li>
              <li>Always keep the earthing working to avoid damage to electrical equipment.</li>
              <li>Consider buying surge protectors, lightning rods or a lightning protection system.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              During
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              If Indoors
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Unplug all electrical equipment before the storm arrives.</li>
              <li>Stay away from windows and doors; stay off verandas.</li>
              <li>Do not touch plumbing and metal pipes. Do not use running water.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              If Outdoors
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Get inside a house or building. Stay away from structures with tin roofs or metal sheets.</li>
              <li>If caught under the open sky, crouch. Do not lie down or place your hands on the ground.</li>
              <li>Do not take shelter under trees. Spread out and do not stand in a crowd.</li>
              <li>If you are outside, seek refuge in a car or grounded building.</li>
              <li>Stay put if you are inside a car or bus.</li>
              <li>Do not use metallic objects and stay away from power lines.</li>
              <li>Get out of water, pools, lakes, small boats and water bodies.</li>
              <li>Avoid hilltops, open fields and beaches.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              After
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Watch out for fallen power lines and trees. Report them immediately.</li>
              <li>Treat the affected person.</li>
              <li>Administer CPR if needed.</li>
              <li>Seek medical attention immediately.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Lightningdnd;