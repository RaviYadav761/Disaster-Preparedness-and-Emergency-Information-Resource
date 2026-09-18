import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getNearestHourlyIndex,
} from "./weatherUtils";
import WeatherSearch from "./WeatherSearch";
import CurrentWeather from "./CurrentWeather";
import ForecastList from "./ForecastList";
import WeatherAdvisory from "./WeatherAdvisory";
import WeatherTips from "./WeatherTips";

const DEFAULT_CITY = "Delhi";

export default function Weather() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      );
      const geoData = await geoRes.json();
      if (!geoData.results?.length) {
        setError(`City "${cityName}" not found. Please try again.`);
        setLoading(false);
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];
      const forecastRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
      );
      const forecastData = await forecastRes.json();

      const currentWeatherTime = forecastData.current_weather?.time ?? new Date().toISOString();
      const currentHourIndex = getNearestHourlyIndex(
        forecastData.hourly?.time ?? [],
        currentWeatherTime
      );

      setCity(name);
      setWeather({
        current: {
          temperature: forecastData.current_weather?.temperature ?? forecastData.hourly?.temperature_2m?.[currentHourIndex] ?? 0,
          apparentTemperature: forecastData.hourly?.apparent_temperature?.[currentHourIndex] ?? forecastData.current_weather?.temperature ?? 0,
          humidity: forecastData.hourly?.relative_humidity_2m?.[currentHourIndex] ?? 0,
          windspeed: forecastData.current_weather?.windspeed ?? 0,
          pressure: forecastData.hourly?.surface_pressure?.[currentHourIndex] ?? 0,
          precipitation: forecastData.hourly?.precipitation?.[currentHourIndex] ?? 0,
          weathercode: forecastData.current_weather?.weathercode ?? forecastData.daily?.weathercode?.[0] ?? 0,
        },
        daily: (forecastData.daily?.time ?? []).map((date, i) => ({
          date,
          weathercode: forecastData.daily?.weathercode?.[i] ?? 0,
          maxTemp: forecastData.daily?.temperature_2m_max?.[i] ?? 0,
          minTemp: forecastData.daily?.temperature_2m_min?.[i] ?? 0,
          rainSum: forecastData.daily?.precipitation_sum?.[i] ?? 0,
        })),
      });
    } catch (err) {
      setError("Unable to fetch weather. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, []);

  const handleSearch = (newCity) => fetchWeather(newCity);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Weather Watch</h1>
          <p className="text-gray-600">Check current weather and stay prepared for any emergency.</p>
        </div>

        <WeatherSearch onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="mt-6 rounded-lg bg-red-100 p-4 text-red-700">{error}</div>
        )}

        {loading && !weather && (
          <div className="mt-8 text-center text-gray-500">Loading weather data...</div>
        )}

        {weather && !loading && (
          <div className="mt-8 space-y-6">
            <CurrentWeather data={weather.current} city={city} />
            <WeatherAdvisory
              code={weather.current.weathercode}
              maxTemp={weather.daily[0].maxTemp}
              rainSum={weather.daily[0].rainSum}
            />
            <ForecastList days={weather.daily.slice(0, 5)} />
            <WeatherTips />
          </div>
        )}
      </main>

      <footer className="mt-12 bg-teal-700 py-6 text-center text-white">
        <p className="text-sm">© {new Date().getFullYear()} Disaster Preparedness & Emergency Resource</p>
      </footer>
    </div>
  );
}
