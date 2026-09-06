import React from "react";
import { Link } from "react-router-dom";

const Bookletdnd = () => {
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

  const pdfUrl =
    "https://cdnbbsr.s3waas.gov.in/s36143cc48107351648de16d8367dc5db4/uploads/2025/03/202503231214337801.pdf";

  return (
    <div>

      {/* Top Bar */}
      <p className="bg-teal-600 text-white font-bold px-3 py-2">
        Do's and Don't Booklet provided by NDMA are as follows:
      </p>

      <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
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
                  <span className="text-sm">
                    {name}
                  </span>
                </Link>
              ))}

            </div>

          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">

            <p className="text-gray-700 text-sm mb-3">
              Do's and Don't Booklet provided by NDMA are as follows:
            </p>

            <div className="flex items-center gap-2">

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 hover:underline text-sm"
              >
                Do's and Don't Booklet [PDF 5.5 MB]
              </a>

              {/* PDF Icon */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600"
                title="Open PDF"
              >
                📄
              </a>

              {/* Download Icon */}
              <a
                href={pdfUrl}
                download
                className="text-gray-600 hover:text-teal-600"
                title="Download PDF"
              >
                ⬇
              </a>

            </div>

          </main>

        </div>

      </div>
    </div>
  );
};

export default Bookletdnd;