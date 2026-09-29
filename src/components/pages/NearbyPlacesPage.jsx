import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_LOCATION = {
  latitude: 19.3839,
  longitude: 72.8379,
  addressName: "R. P. Jr. College of Arts, Science & Commerce, Vasai West (near Gurudwara)",
};
const AREA_OPTIONS = [
  { id: "rp-college", label: "R.P. College (default)", location: DEFAULT_LOCATION },
  { id: "vasai", label: "Vasai", location: { latitude: 19.3428238, longitude: 72.805441, addressName: "Vasai, Vasai-Virar" } },
  { id: "vasai-virar", label: "Vasai-Virar", location: { latitude: 19.3919, longitude: 72.8379, addressName: "Vasai-Virar" } },
  { id: "nalasopara", label: "Nalasopara", location: { latitude: 19.4174424, longitude: 72.8175975, addressName: "Nalasopara, Vasai-Virar" } },
  { id: "naigaon", label: "Naigaon", location: { latitude: 19.3510925, longitude: 72.8465229, addressName: "Naigaon, Vasai-Virar" } },
  { id: "dadar", label: "Dadar", location: { latitude: 19.0192269, longitude: 72.8428479, addressName: "Dadar, Mumbai" } },
  { id: "churchgate", label: "Churchgate", location: { latitude: 18.9354797, longitude: 72.8271741, addressName: "Churchgate, Mumbai" } },
  { id: "mumbai", label: "Mumbai", location: { latitude: 19.054999, longitude: 72.8692035, addressName: "Mumbai" } },
];
const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];
const QUICK_SEARCHES = [
  ["hospital", "🏥", "Hospital"], ["college", "🎓", "College"], ["ATM", "🏧", "ATM"],
  ["hotel", "🏨", "Hotel"], ["pharmacy", "💊", "Pharmacy"], ["restaurant", "🍽️", "Restaurant"],
  ["petrol pump", "⛽", "Petrol Pump"], ["bank", "🏦", "Bank"], ["mountain", "🏔️", "Mountain"],
];
const CATEGORY_FILTERS = {
  hospital: ['[amenity~"hospital|clinic|doctors"]', '[healthcare~"hospital|clinic"]'],
  college: ['[amenity~"college|university"]', '[education~"college|university"]', '[name~"college|university|institute",i]'],
  atm: ["[amenity=atm]"], hotel: ['[tourism~"hotel|hostel|motel|guest_house|resort"]'],
  pharmacy: ["[amenity=pharmacy]"], restaurant: ['[amenity~"restaurant|cafe|fast_food|food_court"]', "[shop=bakery]"],
  "petrol pump": ["[amenity=fuel]"], bank: ["[amenity=bank]"],
  mountain: ['[natural~"^(peak|mountain|hill|volcano)$"]', "[mountain_pass=yes]"],
};
const VERIFIED_MOUNTAIN_PEAKS = [
  { id: "verified-tungareshwar", name: "Tungareshwar", latitude: 19.437689, longitude: 72.924844, elevationM: 666, sourceUrl: "https://peakvisor.com/peak/tungareshwar.html" },
];

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
    '[amenity~"hospital|clinic|doctors|college|university|atm|pharmacy|restaurant|cafe|fuel|bank",i]',
    '[tourism~"hotel|hostel|motel|guest_house|resort",i]',
  ];
  return `[out:json][timeout:12];(${filters.map((filter) => `nwr${around}${filter};`).join("")});out center tags;`;
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
function addVerifiedMountainPeaks(places, query, location, radiusKm) {
  if (getCategory(query) !== "mountain") return places;
  const verifiedPeaks = VERIFIED_MOUNTAIN_PEAKS.map((peak) => ({
    id: peak.id,
    name: peak.name,
    category: "Mountain peak",
    address: `Vasai, Maharashtra • Elevation: ${peak.elevationM} m • Source: PeakVisor`,
    phone: "",
    website: peak.sourceUrl,
    latitude: peak.latitude,
    longitude: peak.longitude,
    distanceKm: Number(distanceInKm(location.latitude, location.longitude, peak.latitude, peak.longitude).toFixed(2)),
  })).filter((peak) => peak.distanceKm <= radiusKm);
  const existingNames = new Set(places.map((place) => place.name.toLowerCase()));
  return [...places, ...verifiedPeaks.filter((peak) => !existingNames.has(peak.name.toLowerCase()))]
    .sort((a, b) => a.distanceKm - b.distanceKm);
}
async function fetchNominatimPlaces(query, location, radiusKm, signal) {
  const latitudeDelta = radiusKm / 111;
  const longitudeDelta = radiusKm / (111 * Math.max(Math.cos((location.latitude * Math.PI) / 180), 0.2));
  const params = new URLSearchParams({
    q: query.trim(), format: "jsonv2", limit: "40", addressdetails: "1",
    viewbox: `${location.longitude - longitudeDelta},${location.latitude + latitudeDelta},${location.longitude + longitudeDelta},${location.latitude - latitudeDelta}`,
    bounded: "1",
  });
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
    signal,
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Location search returned ${response.status}.`);
  const results = await response.json();
  const places = results.map((result, index) => {
    const latitude = Number(result.lat);
    const longitude = Number(result.lon);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
    return {
      id: `nominatim-${result.place_id || index}`,
      name: result.name || result.display_name?.split(",")[0] || "Unnamed place",
      category: result.type || getCategory(query) || "Place",
      address: result.display_name || "Address not available from OpenStreetMap",
      phone: "", website: "",
      distanceKm: Number(distanceInKm(location.latitude, location.longitude, latitude, longitude).toFixed(2)),
      latitude, longitude,
    };
  }).filter((place) => place && place.distanceKm <= radiusKm).sort((a, b) => a.distanceKm - b.distanceKm);
  return places;
}
async function fetchNearbyPlaces(query, location, radiusKm, signal) {
  const params = new URLSearchParams({ data: buildOverpassQuery(query, location.latitude, location.longitude, radiusKm) });
  const request = async (endpoint) => {
    const endpointController = new AbortController();
    const timeout = setTimeout(() => endpointController.abort(), 6000);
    const stopOnParentAbort = () => endpointController.abort();
    signal.addEventListener("abort", stopOnParentAbort, { once: true });
    try {
      const response = await fetch(`${endpoint}?${params.toString()}`, {
        method: "GET",
        signal: endpointController.signal,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Nearby search service returned ${response.status}.`);
      const payload = await response.json();
      const unique = new Map();
      (payload.elements || []).forEach((element) => {
        const place = normalizePlace(element, location);
        if (place && !unique.has(place.id)) unique.set(place.id, place);
      });
      const places = [...unique.values()].sort((a, b) => a.distanceKm - b.distanceKm);
      return places;
    } finally {
      clearTimeout(timeout);
      signal.removeEventListener("abort", stopOnParentAbort);
    }
  };

  // Query one mirror at a time: launching identical wide-area requests in
  // parallel can trigger public Overpass rate limits and 504 responses.
  let lastError;
  let receivedSuccessfulResponse = false;
  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const places = await request(endpoint);
      receivedSuccessfulResponse = true;
      if (places.length) return addVerifiedMountainPeaks(places, query, location, radiusKm);
    }
    catch (error) {
      if (signal.aborted) throw new DOMException("Search cancelled", "AbortError");
      lastError = error;
    }
  }
  try {
    const places = await fetchNominatimPlaces(query, location, radiusKm, signal);
    return addVerifiedMountainPeaks(places, query, location, radiusKm);
  }
  catch (error) {
    if (signal.aborted) throw new DOMException("Search cancelled", "AbortError");
    const verifiedPeaks = addVerifiedMountainPeaks([], query, location, radiusKm);
    if (verifiedPeaks.length) return verifiedPeaks;
    if (receivedSuccessfulResponse) return [];
    throw lastError || error;
  }
}
async function reverseGeocode(latitude, longitude, signal) {
  const params = new URLSearchParams({ lat: String(latitude), lon: String(longitude), format: "jsonv2", zoom: "18" });
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params}`, { signal });
  if (!response.ok) throw new Error("Reverse geocoding failed.");
  const result = await response.json();
  return result.display_name || `Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
}
function PlaceCard({ place }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;
  const openGoogleMaps = () => window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  return <article
    className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
    onClick={openGoogleMaps}
    onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openGoogleMaps(); } }}
    role="link"
    tabIndex={0}
    title="Open this place in Google Maps"
  >
    <div className="flex items-start justify-between gap-3"><div className="min-w-0"><h3 className="truncate text-base font-bold text-slate-900">{place.name}</h3><p className="mt-1 text-xs font-medium capitalize text-blue-600">{place.category}</p></div><span className="shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">{place.distanceKm} km</span></div>
    <p className="mt-4 text-sm leading-relaxed text-slate-600">{place.address}</p>
    <div className="mt-4 flex flex-wrap gap-2 text-xs">{place.phone && <a onClick={(event) => event.stopPropagation()} className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700" href={`tel:${place.phone}`}>{place.phone}</a>}<a onClick={(event) => event.stopPropagation()} className="rounded-lg bg-blue-600 px-3 py-2 font-semibold text-white hover:bg-blue-700" href={googleMapsUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>{place.website && <a onClick={(event) => event.stopPropagation()} className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700" href={place.website} target="_blank" rel="noreferrer">Website</a>}</div>
  </article>;
}

export default function NearbyPlacesPage() {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [selectedArea, setSelectedArea] = useState("rp-college");
  const [query, setQuery] = useState("hospital");
  const [input, setInput] = useState("hospital");
  const [radiusKm, setRadiusKm] = useState(10);
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState("");
  const activeSearchRef = useRef(null);

  const search = useCallback(async (nextQuery = query, nextLocation = location, nextRadius = radiusKm) => {
    const cleanQuery = nextQuery.trim();
    if (!cleanQuery) return;
    const startsMountainSearch = getCategory(cleanQuery) === "mountain" && getCategory(query) !== "mountain";
    const leavesMountainSearch = getCategory(query) === "mountain" && getCategory(cleanQuery) !== "mountain";
    const searchRadius = startsMountainSearch ? Math.max(nextRadius, 100) : leavesMountainSearch ? Math.min(nextRadius, 10) : nextRadius;
    if (searchRadius !== radiusKm) setRadiusKm(searchRadius);
    setQuery(cleanQuery); setInput(cleanQuery); setIsLoading(true); setError("");
    const verifiedPeaks = addVerifiedMountainPeaks([], cleanQuery, nextLocation, searchRadius);
    setPlaces(verifiedPeaks);
    activeSearchRef.current?.abort();
    const controller = new AbortController();
    activeSearchRef.current = controller;
    try { setPlaces(await fetchNearbyPlaces(cleanQuery, nextLocation, searchRadius, controller.signal)); }
    catch (searchError) { if (searchError.name !== "AbortError") { setPlaces([]); setError("Nearby places अभी load नहीं हो पाए। कृपया फिर से try करें या radius बढ़ाएँ।"); } }
    finally {
      if (activeSearchRef.current === controller) {
        activeSearchRef.current = null;
        setIsLoading(false);
      }
    }
  }, [location, query, radiusKm]);

  useEffect(() => { search("hospital", DEFAULT_LOCATION, 10); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const detectLocation = () => {
    if (!navigator.geolocation) { setError("इस browser में location support उपलब्ध नहीं है। Default location से search किया जा रहा है।"); return; }
    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const nextLocation = { latitude: coords.latitude, longitude: coords.longitude, addressName: "Current location" };
      try { nextLocation.addressName = await reverseGeocode(coords.latitude, coords.longitude); } catch { /* Search still works without reverse geocoding. */ }
      setLocation(nextLocation); setIsDetecting(false); search(query, nextLocation, radiusKm);
    }, () => { setIsDetecting(false); setError("Location permission नहीं मिली। Default location से nearby places दिखाए जा रहे हैं।"); search(query, DEFAULT_LOCATION, radiusKm); }, { enableHighAccuracy: true, timeout: 12000 });
  };
  const radiusOptions = useMemo(() => [2, 5, 10, 20, 50, 100], []);
  const selectArea = (event) => {
    const area = AREA_OPTIONS.find((option) => option.id === event.target.value);
    if (!area) return;
    setSelectedArea(area.id);
    setLocation(area.location);
    search(query, area.location, radiusKm);
  };

  return <div className="min-h-screen bg-slate-100/60 font-sans text-slate-900">
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-sm"><div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6"><div><h1 className="text-lg font-bold">Nearby Places</h1><p className="text-xs text-slate-500">Find places around you</p></div><span className="hidden max-w-xs truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:block">{location.addressName}</span></div></header>
    <main className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"><form className="flex gap-2" onSubmit={(event) => { event.preventDefault(); search(input); }}><input className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Search nearby places (e.g. hospital, college)..." /><button className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:bg-slate-300" disabled={isLoading || !input.trim()} type="submit">{isLoading ? "Searching..." : "Search"}</button></form><div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">{QUICK_SEARCHES.map(([value, icon, label]) => <button key={value} type="button" onClick={() => search(value)} className={`rounded-full border px-3 py-1.5 text-xs font-medium ${query.toLowerCase() === value.toLowerCase() ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-slate-100 text-slate-700 hover:border-blue-200 hover:bg-blue-50"}`}>{icon} {label}</button>)}</div></section>
      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><label className="flex min-w-[230px] flex-1 items-center gap-2 text-sm font-medium text-slate-600">Area<select value={selectedArea} onChange={selectArea} className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-100">{AREA_OPTIONS.map((area) => <option key={area.id} value={area.id}>{area.label}</option>)}</select></label><button type="button" onClick={detectLocation} disabled={isDetecting} className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100">{isDetecting ? "Detecting location..." : "Use my location"}</button><label className="flex items-center gap-2 text-sm font-medium text-slate-600">Radius<select value={radiusKm} onChange={(event) => { const value = Number(event.target.value); setRadiusKm(value); search(query, location, value); }} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-100">{radiusOptions.map((value) => <option key={value} value={value}>{value} km</option>)}</select></label></section>
      <div><h2 className="text-xl font-bold">Nearby Results for <span className="rounded-lg bg-blue-50 px-2.5 py-0.5 text-blue-600">“{query}”</span></h2><p className="mt-1 text-xs text-slate-500">Found {places.length} real places within {radiusKm} km • Live OpenStreetMap data</p></div>
      {error && <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"><strong>Search problem:</strong> {error}</div>}
      {isLoading && !places.length ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{[1, 2, 3, 4].map((item) => <div key={item} className="h-40 animate-pulse rounded-2xl border border-slate-200 bg-white" />)}</div> : places.length ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{places.map((place) => <PlaceCard key={place.id} place={place} />)}</div> : <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">No places found. Try a larger radius or another category.</div>}
    </main><footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-400">Nearby Places • OpenStreetMap-powered browser search</footer>
  </div>;
}
