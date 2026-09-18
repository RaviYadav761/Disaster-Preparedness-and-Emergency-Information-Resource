import { getWeatherInfo, formatDate } from "./weatherUtils";

export default function ForecastList({ days }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-gray-800">5-Day Forecast</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((day, idx) => {
          const info = getWeatherInfo(day.weathercode);
          return (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl bg-gray-50 p-4"
            >
              <div>
                <p className="font-semibold text-gray-700">{formatDate(day.date)}</p>
                <p className="text-sm text-gray-500">{info.label}</p>
              </div>
              <div className="text-right">
                <span className="text-2xl">{info.icon}</span>
                <p className="font-bold text-gray-800">
                  {Math.round(day.maxTemp)}° / {Math.round(day.minTemp)}°
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
