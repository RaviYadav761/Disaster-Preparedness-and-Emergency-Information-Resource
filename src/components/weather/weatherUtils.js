export const weatherCodes = {
  0: { label: "Clear sky", icon: "☀️" },
  1: { label: "Mainly clear", icon: "🌤️" },
  2: { label: "Partly cloudy", icon: "⛅" },
  3: { label: "Overcast", icon: "☁️" },
  45: { label: "Fog", icon: "🌫️" },
  48: { label: "Depositing rime fog", icon: "🌫️" },
  51: { label: "Light drizzle", icon: "🌦️" },
  53: { label: "Moderate drizzle", icon: "🌧️" },
  55: { label: "Dense drizzle", icon: "🌧️" },
  61: { label: "Slight rain", icon: "🌧️" },
  63: { label: "Moderate rain", icon: "🌧️" },
  65: { label: "Heavy rain", icon: "🌧️" },
  71: { label: "Slight snow", icon: "🌨️" },
  73: { label: "Moderate snow", icon: "❄️" },
  75: { label: "Heavy snow", icon: "❄️" },
  77: { label: "Snow grains", icon: "🌨️" },
  80: { label: "Slight rain showers", icon: "🌦️" },
  81: { label: "Moderate rain showers", icon: "🌧️" },
  82: { label: "Violent rain showers", icon: "⛈️" },
  85: { label: "Slight snow showers", icon: "🌨️" },
  86: { label: "Heavy snow showers", icon: "❄️" },
  95: { label: "Thunderstorm", icon: "⛈️" },
  96: { label: "Thunderstorm with hail", icon: "⛈️" },
  99: { label: "Thunderstorm with heavy hail", icon: "⛈️" },
};

export function getWeatherInfo(code) {
  return weatherCodes[code] || { label: "Unknown", icon: "🌡️" };
}

export function getNearestHourlyIndex(hourlyTimes, targetTime) {
  if (!Array.isArray(hourlyTimes) || !hourlyTimes.length) return 0;

  const targetMs = new Date(targetTime).getTime();
  let nearestIndex = 0;
  let smallestDifference = Number.POSITIVE_INFINITY;

  hourlyTimes.forEach((time, index) => {
    const timeMs = new Date(time).getTime();
    const difference = Math.abs(timeMs - targetMs);

    if (difference < smallestDifference) {
      smallestDifference = difference;
      nearestIndex = index;
    }
  });

  return nearestIndex;
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function getAdvisory(code, maxTemp, rainSum) {
  if (code >= 95) {
    return {
      type: "Thunderstorm Alert",
      level: "high",
      text: "Thunderstorms expected. Stay indoors, avoid open fields and tall trees.",
    };
  }
  if (code >= 71 && code <= 77) {
    return {
      type: "Snowfall Warning",
      level: "medium",
      text: "Snowfall likely. Keep emergency supplies and avoid unnecessary travel.",
    };
  }
  if ((code >= 61 && code <= 65) || (code >= 80 && code <= 82) || rainSum > 10) {
    return {
      type: "Heavy Rain / Flood Watch",
      level: "high",
      text: "Heavy rain may cause waterlogging or flooding. Avoid low-lying areas.",
    };
  }
  if (maxTemp > 40) {
    return {
      type: "Heat Wave Warning",
      level: "high",
      text: "Extreme heat expected. Stay hydrated and avoid direct sun during peak hours.",
    };
  }
  if (maxTemp > 35) {
    return {
      type: "Hot Weather Advisory",
      level: "medium",
      text: "Hot conditions ahead. Drink plenty of water and wear light cotton clothes.",
    };
  }
  if (code <= 3) {
    return {
      type: "Generally Safe",
      level: "low",
      text: "Weather looks calm. Still keep emergency contacts handy.",
    };
  }
  return {
    type: "Weather Alert",
    level: "medium",
    text: "Stay updated with local news and follow official advisories.",
  };
}

export const safetyTips = [
  {
    title: "Rain & Floods",
    icon: "🌧️",
    points: [
      "Avoid walking or driving through flood water.",
      "Move to higher ground if water rises.",
      "Keep emergency kit and drinking water ready.",
    ],
  },
  {
    title: "Heat Waves",
    icon: "🌡️",
    points: [
      "Drink water even if you don't feel thirsty.",
      "Avoid outdoor activities between 12 PM - 4 PM.",
      "Wear loose, light-coloured cotton clothes.",
    ],
  },
  {
    title: "Thunderstorms",
    icon: "⛈️",
    points: [
      "Stay inside and away from windows.",
      "Do not use wired phones or electrical appliances.",
      "Avoid standing under trees or open fields.",
    ],
  },
];
