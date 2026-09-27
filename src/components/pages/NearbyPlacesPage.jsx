import { useCallback, useEffect, useMemo, useState } from "react";

const DEFAULT_LOCATION = { latitude: 19.3839, longitude: 72.8379, addressName: "Vasai West" };
const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];
const QUICK_SEARCHES = [
  ["hospital", "🏥", "Hospital"], ["college", "🎓", "College"], ["ATM", "🏧", "ATM"],
  ["hotel", "🏨", "Hotel"], ["pharmacy", "💊", "Pharmacy"], ["restaurant", "🍽️", "Restaurant"],
  ["petrol pump", "⛽", "Petrol Pump"], ["bank", "🏦", "Bank"],
];
const CATEGORY_FILTERS = {
  hospital: ['[amenity~"hospital|clinic|doctors"]', '[healthcare~"hospital|clinic"]'],
  college: ['[amenity~"college|university|school"]', '[education~"college|university|school"]'],
  atm: ["[amenity=atm]"], hotel: ['[tourism~"hotel|hostel|motel|guest_house|resort"]'],
  pharmacy: ["[amenity=pharmacy]"], restaurant: ['[amenity~"restaurant|cafe|fast_food|food_court"]', "[shop=bakery]"],
  "petrol pump": ["[amenity=fuel]"], bank: ["[amenity=bank]"],
};

function getCategory(query) {
  const normalized = query.toLowerCase();
  return Object.keys(CATEGORY_FILTERS).find((category) => normalized.includes(category));
}
function escapeOverpassQuery(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function buildOverpassQuery(query, latitude, longitude, radiusKm) {
  const around = `(around:${Math.round(radiusKm * 1000)},${latitude},${longitude})`;
  const category = getCategory(query);
  const filters = CATEGORY_FILTERS[category] || [
    `[name~"${escapeOverpassQuery(query.trim())}",i]`,
    '[amenity~"hospital|clinic|doctors|college|university|school|atm|pharmacy|restaurant|cafe|fuel|bank",i]',
    '[tourism~"hotel|hostel|motel|guest_house|resort",i]',
  ];
  return `[out:json][timeout:25];(${filters.flatMap((filter) => [`node${around}${filter};`, `way${around}${filter};`, `relation${around}${filter};`]).join("")});out center tags;`;
}
function distanceInKm(fromLatitude, fromLongitude, latitude, longitude) {
  const earthRadius = 6371;
  const latDelta = ((latitude - fromLatitude) * Math.PI) / 180;
  const lonDelta = ((longitude - fromLongitude) * Math.PI) / 180;
  const value = Math.sin(latDelta / 2) ** 2 + Math.cos((fromLatitude * Math.PI) / 180) * Math.cos((latitude * Math.PI) / 180) * Math.sin(lonDelta / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}
function normalizePlace(element, location) {
  const tags = element.tags || {};
  const latitude = Number(element.lat ?? element.center?.lat);
  const longitude = Number(element.lon ?? element.center?.lon);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
  const address = [tags["addr:housenumber"], tags["addr:street"], tags["addr:suburb"], tags["addr:city"], tags["addr:state"]].filter(Boolean).join(", ");
  return {
    id: `${element.type}-${element.id}`,
    name: tags.name || tags["name:en"] || tags.operator || "Unnamed place",
    category: tags.amenity || tags.healthcare || tags.tourism || tags.shop || "Place",
    address: address || "Address not available from OpenStreetMap",
    phone: tags.phone || tags["contact:phone"] || "", website: tags.website || tags["contact:website"] || "",
    distanceKm: Number(distanceInKm(location.latitude, location.longitude, latitude, longitude).toFixed(2)), latitude, longitude,
  };
}
async function fetchNearbyPlaces(query, location, radiusKm, signal) {
  const params = new URLSearchParams({ data: buildOverpassQuery(query, location.latitude, location.longitude, radiusKm) });
  let lastError;
  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const response = await fetch(`${endpoint}?${params.toString()}`, { method: "GET", signal, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Nearby search service returned ${response.status}.`);
      const payload = await response.json();
      const unique = new Map();
      (payload.elements || []).forEach((element) => { const place = normalizePlace(element, location); if (place && !unique.has(place.id)) unique.set(place.id, place); });
      return [...unique.values()].sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 60);
    } catch (error) { if (error.name === "AbortError") throw error; lastError = error; }
  }
  throw lastError || new Error("Nearby search is temporarily unavailable. Please try again.");
}
async function reverseGeocode(latitude, longitude, signal) {
  const params = new URLSearchParams({ lat: String(latitude), lon: String(longitude), format: "jsonv2", zoom: "18" });
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params}`, { signal });
  if (!response.ok) throw new Error("Reverse geocoding failed.");
  const result = await response.json();
  return result.display_name || `Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
}
function PlaceCard({ place }) {
  const mapUrl = `https://www.openstreetmap.org/?mlat=${place.latitude}&mlon=${place.longitude}#map=18/${place.latitude}/${place.longitude}`;
  return <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-start justify-between gap-3"><div className="min-w-0"><h3 className="truncate text-base font-bold text-slate-900">{place.name}</h3><p className="mt-1 text-xs font-medium capitalize text-blue-600">{place.category}</p></div><span className="shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">{place.distanceKm} km</span></div>
    <p className="mt-4 text-sm leading-relaxed text-slate-600">{place.address}</p>
    <div className="mt-4 flex flex-wrap gap-2 text-xs">{place.phone && <a className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700" href={`tel:${place.phone}`}>{place.phone}</a>}<a className="rounded-lg bg-blue-600 px-3 py-2 font-semibold text-white hover:bg-blue-700" href={mapUrl} target="_blank" rel="noreferrer">Open map</a>{place.website && <a className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700" href={place.website} target="_blank" rel="noreferrer">Website</a>}</div>
  </article>;
}

export default function NearbyPlacesPage() {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [query, setQuery] = useState("hospital");
  const [input, setInput] = useState("hospital");
  const [radiusKm, setRadiusKm] = useState(5);
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState("");

  const search = useCallback(async (nextQuery = query, nextLocation = location, nextRadius = radiusKm) => {
    const cleanQuery = nextQuery.trim();
    if (!cleanQuery) return;
    setQuery(cleanQuery); setInput(cleanQuery); setIsLoading(true); setError("");
    const controller = new AbortController();
    try { setPlaces(await fetchNearbyPlaces(cleanQuery, nextLocation, nextRadius, controller.signal)); }
    catch (searchError) { if (searchError.name !== "AbortError") { setPlaces([]); setError("Nearby places अभी load नहीं हो पाए। कृपया फिर से try करें या radius बढ़ाएँ।"); } }
    finally { setIsLoading(false); }
  }, [location, query, radiusKm]);

  useEffect(() => { search("hospital", DEFAULT_LOCATION, 5); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const detectLocation = () => {
    if (!navigator.geolocation) { setError("इस browser में location support उपलब्ध नहीं है। Default location से search किया जा रहा है।"); return; }
    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const nextLocation = { latitude: coords.latitude, longitude: coords.longitude, addressName: "Current location" };
      try { nextLocation.addressName = await reverseGeocode(coords.latitude, coords.longitude); } catch { /* Search still works without reverse geocoding. */ }
      setLocation(nextLocation); setIsDetecting(false); search(query, nextLocation, radiusKm);
    }, () => { setIsDetecting(false); setError("Location permission नहीं मिली। Default location से nearby places दिखाए जा रहे हैं।"); search(query, DEFAULT_LOCATION, radiusKm); }, { enableHighAccuracy: true, timeout: 12000 });
  };
  const radiusOptions = useMemo(() => [2, 5, 10, 20], []);

  return <div className="min-h-screen bg-slate-100/60 font-sans text-slate-900">
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-sm"><div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6"><div><h1 className="text-lg font-bold">Nearby Places</h1><p className="text-xs text-slate-500">Find places around you</p></div><span className="hidden max-w-xs truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:block">{location.addressName}</span></div></header>
    <main className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"><form className="flex gap-2" onSubmit={(event) => { event.preventDefault(); search(input); }}><input className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Search nearby places (e.g. hospital, college)..." /><button className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:bg-slate-300" disabled={isLoading || !input.trim()} type="submit">{isLoading ? "Searching..." : "Search"}</button></form><div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">{QUICK_SEARCHES.map(([value, icon, label]) => <button key={value} type="button" onClick={() => search(value)} className={`rounded-full border px-3 py-1.5 text-xs font-medium ${query.toLowerCase() === value.toLowerCase() ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-slate-100 text-slate-700 hover:border-blue-200 hover:bg-blue-50"}`}>{icon} {label}</button>)}</div></section>
      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><button type="button" onClick={detectLocation} disabled={isDetecting} className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100">{isDetecting ? "Detecting location..." : "Use my location"}</button><label className="flex items-center gap-2 text-sm font-medium text-slate-600">Radius<select value={radiusKm} onChange={(event) => { const value = Number(event.target.value); setRadiusKm(value); search(query, location, value); }} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-100">{radiusOptions.map((value) => <option key={value} value={value}>{value} km</option>)}</select></label></section>
      <div><h2 className="text-xl font-bold">Nearby Results for <span className="rounded-lg bg-blue-50 px-2.5 py-0.5 text-blue-600">“{query}”</span></h2><p className="mt-1 text-xs text-slate-500">Found {places.length} places within {radiusKm} km</p></div>
      {error && <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"><strong>Search problem:</strong> {error}</div>}
      {isLoading ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{[1, 2, 3, 4].map((item) => <div key={item} className="h-40 animate-pulse rounded-2xl border border-slate-200 bg-white" />)}</div> : places.length ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{places.map((place) => <PlaceCard key={place.id} place={place} />)}</div> : <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">No places found. Try a larger radius or another category.</div>}
    </main><footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-400">Nearby Places • OpenStreetMap-powered browser search</footer>
  </div>;
}
