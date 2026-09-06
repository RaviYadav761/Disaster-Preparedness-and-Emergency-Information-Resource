import React from "react";
import { Link } from "react-router-dom";

const Landslidednd = () => {
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
              Do's
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Prepare your family emergency kit according to information given by the warning department or news channel.</li>
              <li>Move away from landslide path or downstream valleys quickly without waiting too much.</li>
              <li>Keep drains clean.</li>
              <li>Inspect drains for litter, leaves, plastic bags, rubble etc.</li>
              <li>Keep the house pipes open.</li>
              <li>Grow more trees that can hold soil through roots.</li>
              <li>Identify areas of rock fall and subsidence of buildings that indicate landslides and move to safer areas.</li>
              <li>Notice signs such as cracks on the surface and tilting of trees, electric poles and walls.</li>
              <li>Ensure that slope of roofs is not excessive.</li>
              <li>Listen for unusual sounds such as cracking or rumbling indicating landslides.</li>
              <li>Stay alert, awake and active during the impact or possibility of impact.</li>
              <li>Locate and go to safe shelters.</li>
              <li>Try to stay with your family and companions.</li>
              <li>Check for injured and trapped persons.</li>
              <li>Mark path of tracking so that you can be lost in the middle of the forest.</li>
              <li>Know how to give signs or communicate during emergency situations.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              Don'ts
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Try to avoid construction and stay in vulnerable areas.</li>
              <li>Do not panic.</li>
              <li>Do not touch or walk over loose material and electrical wiring or poles.</li>
              <li>Do not built houses near steep slopes and near drainage path.</li>
              <li>Do not drink contaminated water directly from rivers, springs, wells.</li>
              <li>Do not move an injured person without rendering first aid unless there is immediate danger.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Landslidednd;