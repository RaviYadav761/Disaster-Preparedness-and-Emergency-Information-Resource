import { safetyTips } from "./weatherUtils";

export default function WeatherTips() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-gray-800">Weather Safety Tips</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {safetyTips.map((tip) => (
          <div
            key={tip.title}
            className="rounded-xl border border-gray-100 bg-gray-50 p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-2xl">{tip.icon}</span>
              <h4 className="font-bold text-gray-800">{tip.title}</h4>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-sm text-gray-600">
              {tip.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
