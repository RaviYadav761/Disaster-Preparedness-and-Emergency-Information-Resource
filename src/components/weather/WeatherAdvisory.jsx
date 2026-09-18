import { getAdvisory } from "./weatherUtils";

const levelStyles = {
  low: "bg-emerald-100 text-emerald-800 border-emerald-200",
  medium: "bg-amber-100 text-amber-800 border-amber-200",
  high: "bg-red-100 text-red-800 border-red-200",
};

export default function WeatherAdvisory({ code, maxTemp, rainSum }) {
  const advisory = getAdvisory(code, maxTemp, rainSum);

  return (
    <div className={`rounded-xl border p-4 ${levelStyles[advisory.level]}`}>
      <h4 className="font-bold">{advisory.type}</h4>
      <p className="mt-1 text-sm">{advisory.text}</p>
    </div>
  );
}
