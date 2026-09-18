import { getWeatherInfo } from "./weatherUtils";

export default function CurrentWeather({ data, city }) {
  const info = getWeatherInfo(data.weathercode);

  return (
    <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{city}</h2>
          <p className="text-emerald-100">{info.label}</p>
        </div>
        <div className="text-6xl">{info.icon}</div>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-6xl font-bold">{Math.round(data.temperature)}°C</span>
        <span className="text-lg text-emerald-100">Feels like {Math.round(data.apparentTemperature)}°C</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Humidity" value={`${data.humidity}%`} />
        <Stat label="Wind" value={`${data.windspeed} km/h`} />
        <Stat label="Pressure" value={`${data.pressure} hPa`} />
        <Stat label="Precipitation" value={`${data.precipitation} mm`} />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
      <p className="text-sm text-emerald-100">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}
