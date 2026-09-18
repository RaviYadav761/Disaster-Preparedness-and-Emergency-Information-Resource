import { Link } from "react-router-dom";

const links = [
  { to: "/earthquake", label: "Earthquake", icon: "🏚️" },
  { to: "/flood", label: "Flood", icon: "🌊" },
  { to: "/drought", label: "Drought", icon: "🌾" },
  { to: "/cyclone", label: "Cyclone", icon: "🌀" },
  { to: "/landslide", label: "Landslide", icon: "⛰️" },
  { to: "/fire", label: "Fire Safety", icon: "🔥" },
];

export default function CitizenCorner() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-emerald-700">Citizen Corner</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              <span>{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
