import React from "react";
import { Link } from "react-router-dom";

const Firednd = () => {
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
              Preparedness
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Prepare an emergency kit and keep it readily accessible.</li>
              <li>Regularly check and maintain fire extinguishers.</li>
              <li>Ensure that all electrical wiring is safe and properly maintained.</li>
              <li>Keep flammable materials away from sources of heat and ignition.</li>
              <li>Install smoke alarms and check them regularly.</li>
              <li>Keep emergency exits clear and accessible.</li>
              <li>Do not overload electrical sockets.</li>
              <li>Do not keep inflammable materials near cooking areas.</li>
              <li>Do not leave candles, lamps or cooking appliances unattended.</li>
              <li>Teach children about fire safety.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              In Case of Fire
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Raise an alarm immediately when fire is detected.</li>
              <li>Do not panic.</li>
              <li>Use the nearest safe exit.</li>
              <li>Call the fire service and provide the correct location.</li>
              <li>If smoke is present, stay low to the ground.</li>
              <li>Do not use lifts during a fire.</li>
              <li>Close doors behind you to slow the spread of fire.</li>
              <li>Never go back into a burning building.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              If you are trapped by a fire
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Stay calm and go to a room with a window if possible.</li>
              <li>Close the door and seal gaps around it with wet cloth.</li>
              <li>Signal for help from the window.</li>
              <li>Call emergency services and give your exact location.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
              In case you hear the fire alarm
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Leave the building immediately using the nearest safe exit.</li>
              <li>Do not use lifts.</li>
              <li>Do not stop to collect personal belongings.</li>
              <li>Help children, elderly people and persons with disabilities.</li>
              <li>Do not re-enter the building until authorities declare it safe.</li>
            </ul>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Firednd;