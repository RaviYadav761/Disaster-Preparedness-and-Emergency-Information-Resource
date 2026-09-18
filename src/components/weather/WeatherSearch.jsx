import { useState } from "react";

export default function WeatherSearch({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city (e.g. Delhi, Mumbai, Lucknow)"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        type="submit"
        disabled={loading || !city.trim()}
        className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}
