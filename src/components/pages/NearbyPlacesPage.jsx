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
const PHOTON_API_BASE = "https://photon.komoot.io";
const QUICK_SEARCHES = [
  ["hospital", "🏥", "Hospital"], ["college", "🎓", "College"], ["ATM", "🏧", "ATM"],
  ["hotel", "🏨", "Hotel"], ["pharmacy", "💊", "Pharmacy"], ["restaurant", "🍽️", "Restaurant"],
  ["petrol pump", "⛽", "Petrol Pump"], ["bank", "🏦", "Bank"], ["mountain", "🏔️", "Mountain"],
];
const PHOTON_CATEGORY_TAGS = {
  hospital: ["amenity:hospital", "healthcare:hospital", "amenity:clinic", "healthcare:clinic", "amenity:doctors"],
  college: ["amenity:college", "amenity:university", "education:college", "education:university"],
  atm: ["amenity:atm"],
  hotel: ["tourism:hotel", "tourism:hostel", "tourism:motel", "tourism:guest_house", "tourism:resort"],
  pharmacy: ["amenity:pharmacy"],
  restaurant: ["amenity:restaurant", "amenity:cafe", "amenity:fast_food", "amenity:food_court", "shop:bakery"],
  "petrol pump": ["amenity:fuel"],
  bank: ["amenity:bank"],
  mountain: ["natural:peak", "natural:mountain", "natural:hill", "natural:volcano", "mountain_pass:yes"],
};

function getCategory(query) {
  const normalized = query.toLowerCase();
  return Object.keys(PHOTON_CATEGORY_TAGS).find((category) => normalized.includes(category));
}

function buildBoundingBox(location, radiusKm) {
  const latitudeDelta = radiusKm / 111.32;
  const longitudeDelta = radiusKm / (111.32 * Math.max(Math.abs(Math.cos((location.latitude * Math.PI) / 180)), 0.01));
  const minLongitude = Math.max(-180, location.longitude - longitudeDelta);
  const minLatitude = Math.max(-90, location.latitude - latitudeDelta);
  const maxLongitude = Math.min(180, location.longitude + longitudeDelta);
  const maxLatitude = Math.min(90, location.latitude + latitudeDelta);
  return [minLongitude, minLatitude, maxLongitude, maxLatitude].join(",");
}

function buildPhotonUrl(query, location, radiusKm) {
  const tags = PHOTON_CATEGORY_TAGS[getCategory(query)];
  const params = new URLSearchParams({
    lon: String(location.longitude),
    lat: String(location.latitude),
    limit: "50",
    lang: "en",
  });
  let path = "/reverse";

  if (tags) {
    params.set("radius", String(radiusKm));
    tags.forEach((tag) => params.append("osm_tag", tag));
  } else {
    path = "/api";
    params.set("q", query.trim());
    params.set("bbox", buildBoundingBox(location, radiusKm));
  }

  return `${PHOTON_API_BASE}${path}?${params.toString()}`;
}

function distanceInKm(fromLatitude, fromLongitude, latitude, longitude) {
  const earthRadius = 6371;
  const latDelta = ((latitude - fromLatitude) * Math.PI) / 180;
  const lonDelta = ((longitude - fromLongitude) * Math.PI) / 180;
  const value = Math.sin(latDelta / 2) ** 2
    + Math.cos((fromLatitude * Math.PI) / 180)
    * Math.cos((latitude * Math.PI) / 180)
    * Math.sin(lonDelta / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function normalizePhotonFeature(feature, location, radiusKm) {
  const properties = feature?.properties || {};
  const [rawLongitude, rawLatitude] = feature?.geometry?.coordinates || [];
  const latitude = Number(rawLatitude);
  const longitude = Number(rawLongitude);
  const osmObjectType = { N: "node", W: "way", R: "relation" }[properties.osm_type];
  const osmId = properties.osm_id;
  const name = properties.name || properties["name:en"];

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || !name || !osmObjectType || osmId == null) return null;

  const exactDistanceKm = distanceInKm(location.latitude, location.longitude, latitude, longitude);
  if (exactDistanceKm > radiusKm) return null;

  const address = [
    properties.housenumber,
    properties.street,
    properties.locality || properties.district,
    properties.city,
    properties.state,
    properties.postcode,
  ].filter(Boolean).join(", ");
  const extra = properties.extra || {};

  return {
    id: `${properties.osm_type}-${osmId}`,
    name,
    category: properties.osm_value || properties.osm_key || "Place",
    address: address || "Address not available from OpenStreetMap",
    phone: properties.phone || extra.phone || extra["contact:phone"] || "",
    website: properties.website || extra.website || extra["contact:website"] || "",
    osmUrl: `https://www.openstreetmap.org/${osmObjectType}/${osmId}`,
    distanceKm: Number(exactDistanceKm.toFixed(2)),
    latitude,
    longitude,
  };
}

async function fetchNearbyPlaces(query, location, radiusKm, signal) {
  const requestController = new AbortController();
  let timedOut = false;
  const timeout = setTimeout(() => {
    timedOut = true;
    requestController.abort();
  }, 8000);
  const stopOnParentAbort = () => requestController.abort();
  signal.addEventListener("abort", stopOnParentAbort, { once: true });

  try {
    const response = await fetch(buildPhotonUrl(query, location, radiusKm), {
      signal: requestController.signal,
      headers: { Accept: "application/geo+json, application/json" },
    });
    if (!response.ok) throw new Error(`Photon returned ${response.status}.`);

    const payload = await response.json();
    if (!Array.isArray(payload.features)) throw new Error("Photon returned an invalid place list.");

    const unique = new Map();
    payload.features.forEach((feature) => {
      const place = normalizePhotonFeature(feature, location, radiusKm);
      if (place && !unique.has(place.id)) unique.set(place.id, place);
    });
    return [...unique.values()].sort((a, b) => a.distanceKm - b.distanceKm);
  } catch (error) {
    if (signal.aborted) throw new DOMException("Search cancelled", "AbortError");
    if (timedOut) throw new Error("Photon place search timed out.");
    throw error;
  } finally {
    clearTimeout(timeout);
    signal.removeEventListener("abort", stopOnParentAbort);
  }
}

function PlaceCard({ place }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;
  const openGoogleMaps = () => window.open(googleMapsUrl, "_blank", "noopener,noreferrer");

  return (
    <article
      className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
      onClick={openGoogleMaps}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openGoogleMaps();
        }
      }}
      role="link"
      tabIndex={0}
      title="Open this place in Google Maps"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-slate-900">{place.name}</h3>
          <p className="mt-1 text-xs font-medium capitalize text-blue-600">{place.category}</p>
        </div>
        <span className="shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">{place.distanceKm} km</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{place.address}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {place.phone && <a onClick={(event) => event.stopPropagation()} className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700" href={`tel:${place.phone}`}>{place.phone}</a>}
        <a onClick={(event) => event.stopPropagation()} className="rounded-lg bg-blue-600 px-3 py-2 font-semibold text-white hover:bg-blue-700" href={googleMapsUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
        <a onClick={(event) => event.stopPropagation()} className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700 hover:bg-slate-200" href={place.osmUrl} target="_blank" rel="noreferrer">OpenStreetMap record</a>
        {place.website && <a onClick={(event) => event.stopPropagation()} className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700" href={place.website} target="_blank" rel="noreferrer">Website</a>}
      </div>
    </article>
  );
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
  const [locationNotice, setLocationNotice] = useState("");
  const activeSearchRef = useRef(null);

  const search = useCallback(async (nextQuery = query, nextLocation = location, nextRadius = radiusKm) => {
    const cleanQuery = nextQuery.trim();
    if (!cleanQuery) return;

    const startsMountainSearch = getCategory(cleanQuery) === "mountain" && getCategory(query) !== "mountain";
    const leavesMountainSearch = getCategory(query) === "mountain" && getCategory(cleanQuery) !== "mountain";
    const searchRadius = startsMountainSearch ? Math.max(nextRadius, 100) : leavesMountainSearch ? Math.min(nextRadius, 10) : nextRadius;
    if (searchRadius !== radiusKm) setRadiusKm(searchRadius);

    setQuery(cleanQuery);
    setInput(cleanQuery);
    setIsLoading(true);
    setError("");
    setPlaces([]);
    activeSearchRef.current?.abort();

    const controller = new AbortController();
    activeSearchRef.current = controller;
    try {
      setPlaces(await fetchNearbyPlaces(cleanQuery, nextLocation, searchRadius, controller.signal));
    } catch (searchError) {
      if (searchError.name !== "AbortError") {
        setPlaces([]);
        setError("Live OpenStreetMap data अभी load नहीं हो पाया। कृपया कुछ देर बाद फिर से try करें।");
      }
    } finally {
      if (activeSearchRef.current === controller) {
        activeSearchRef.current = null;
        setIsLoading(false);
      }
    }
  }, [location, query, radiusKm]);

  useEffect(() => { search("hospital", DEFAULT_LOCATION, 10); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocationNotice("इस browser में location support उपलब्ध नहीं है। चुनी हुई जगह से results दिखाए जा रहे हैं।");
      search(query, location, radiusKm);
      return;
    }

    setLocationNotice("");
    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const nextLocation = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        addressName: `Current location (${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)})`,
      };
      setLocation(nextLocation);
      setLocationNotice("");
      setSelectedArea("rp-college");
      setIsDetecting(false);
      search(query, nextLocation, radiusKm);
    }, () => {
      setLocation(DEFAULT_LOCATION);
      setSelectedArea("rp-college");
      setIsDetecting(false);
      search(query, DEFAULT_LOCATION, radiusKm);
      setLocationNotice("Location permission नहीं मिली। R.P. College (default) के आसपास के results दिखाए जा रहे हैं।");
    }, { enableHighAccuracy: true, timeout: 12000 });
  };

  const radiusOptions = useMemo(() => [2, 5, 10, 20, 50, 100], []);
  const selectArea = (event) => {
    const area = AREA_OPTIONS.find((option) => option.id === event.target.value);
    if (!area) return;
    setSelectedArea(area.id);
    setLocation(area.location);
    setLocationNotice("");
    search(query, area.location, radiusKm);
  };

  return (
    <div className="min-h-screen bg-slate-100/60 font-sans text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
          <div>
            <h1 className="text-lg font-bold">Nearby Places</h1>
            <p className="text-xs text-slate-500">Find places around you</p>
          </div>
          <span className="hidden max-w-xs truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:block">{location.addressName}</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <form className="flex gap-2" onSubmit={(event) => { event.preventDefault(); search(input); }}>
            <input
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Search nearby places (e.g. hospital, college)..."
            />
            <button className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:bg-slate-300" disabled={isLoading || !input.trim()} type="submit">
              {isLoading ? "Searching..." : "Search"}
            </button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            {QUICK_SEARCHES.map(([value, icon, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => search(value)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${query.toLowerCase() === value.toLowerCase() ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-slate-100 text-slate-700 hover:border-blue-200 hover:bg-blue-50"}`}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <label className="flex min-w-[230px] flex-1 items-center gap-2 text-sm font-medium text-slate-600">
            Area
            <select value={selectedArea} onChange={selectArea} className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-100">
              {AREA_OPTIONS.map((area) => <option key={area.id} value={area.id}>{area.label}</option>)}
            </select>
          </label>
          <button type="button" onClick={detectLocation} disabled={isDetecting} className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100">
            {isDetecting ? "Detecting location..." : "Use my location"}
          </button>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
            Radius
            <select value={radiusKm} onChange={(event) => { const value = Number(event.target.value); setRadiusKm(value); search(query, location, value); }} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-100">
              {radiusOptions.map((value) => <option key={value} value={value}>{value} km</option>)}
            </select>
          </label>
        </section>

        <div>
          <h2 className="text-xl font-bold">Nearby Results for <span className="rounded-lg bg-blue-50 px-2.5 py-0.5 text-blue-600">“{query}”</span></h2>
          <p className="mt-1 text-xs text-slate-500">
            Found {places.length} OpenStreetMap-mapped places within {radiusKm} km • Search by <a className="underline hover:text-slate-700" href="https://photon.komoot.io/" target="_blank" rel="noreferrer">Photon</a>
          </p>
        </div>

        {locationNotice && <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800"><strong>Location notice:</strong> {locationNotice}</div>}
        {error && <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"><strong>Search problem:</strong> {error}</div>}
        {isLoading && !places.length ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{[1, 2, 3, 4].map((item) => <div key={item} className="h-40 animate-pulse rounded-2xl border border-slate-200 bg-white" />)}</div>
        ) : places.length ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{places.map((place) => <PlaceCard key={place.id} place={place} />)}</div>
        ) : !error && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">No matching OpenStreetMap places found. Try a larger radius or another category.</div>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-400">
        Nearby Places • Data © <a className="underline hover:text-slate-600" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>
      </footer>
    </div>
  );
}
