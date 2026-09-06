import React from "react";

const EmergencyHelplines = () => {
  const helplines = [
    {
      name: "Emergency",
      number: "112",
      description: "Police, Fire & Ambulance emergency services",
    },
    {
      name: "Police",
      number: "100",
      description: "For police assistance",
    },
    {
      name: "Fire",
      number: "101",
      description: "For fire and rescue services",
    },
    {
      name: "Ambulance",
      number: "108",
      description: "For emergency medical assistance",
    },
    {
      name: "Women Helpline",
      number: "181",
      description: "For women in distress",
    },
    {
      name: "Child Helpline",
      number: "1098",
      description: "For children requiring emergency assistance",
    },
    {
      name: "Disaster Management",
      number: "1070",
      description: "State-level disaster management assistance",
    },
    {
      name: "National Disaster Management",
      number: "1078",
      description: "Disaster-related emergency assistance",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Top Heading */}
      <div className="bg-teal-600 text-white text-center font-bold px-4 py-3">
        Emergency Helplines
      </div>

      <div className="max-w-6xl mx-auto px-5 py-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Emergency Helplines
        </h1>

        <p className="text-gray-600 mb-6">
          Important emergency contact numbers for immediate assistance.
        </p>

        {/* Helpline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {helplines.map((item) => (
            <div
              key={item.number}
              className="border border-gray-300 rounded-md p-5 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-4">

                <div>
                  <h2 className="text-lg font-bold text-teal-700">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>

                <a
                  href={`tel:${item.number}`}
                  className="bg-teal-600 text-white font-bold text-lg px-4 py-2 rounded hover:bg-teal-700"
                >
                  {item.number}
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default EmergencyHelplines;