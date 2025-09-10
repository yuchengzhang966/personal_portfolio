import { NextRequest, NextResponse } from 'next/server';

// Moved outside the function to avoid recreation on every call
const weatherDescriptions: { [key: number]: string } = {
  0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Fog', 48: 'Depositing rime fog',
  51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
  61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
  71: 'Slight snow fall', 73: 'Moderate snow fall', 75: 'Heavy snow fall',
  80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
  95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail',
};

const weatherIcons: { [key: number]: string } = {
  0: '01', 1: '02', 2: '03', 3: '04', 45: '50', 48: '50',
  51: '09', 53: '09', 55: '09', 61: '10', 63: '10', 65: '10',
  71: '13', 73: '13', 75: '13', 80: '09', 81: '09', 82: '09',
  95: '11', 96: '11', 99: '11',
};

// Helper to map WMO weather codes to descriptions and OpenWeatherMap icon codes
function mapWeatherCode(code: number, isDay: boolean): { description: string; icon: string } {
  const description = weatherDescriptions[code] || 'Unknown weather';
  const iconCode = weatherIcons[code] || '01';
  const dayNight = isDay ? 'd' : 'n';

  return { description, icon: `${iconCode}${dayNight}` };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get('latitude');
  const lon = searchParams.get('longitude');

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Latitude and Longitude parameters are required.' },
      { status: 400 }
    );
  }

  // Using Open-Meteo API which doesn't require an API key
  const forecastApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

  // Use a free reverse geocoding API to get city/country name from coordinates
  const reverseGeocodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;

  try {
    // Fetch weather and geocoding data in parallel
    const [weatherResponse, geoResponse] = await Promise.all([
      fetch(forecastApiUrl, {
        next: { revalidate: 600 }, // Revalidate every 10 minutes
      }),
      fetch(reverseGeocodeUrl),
    ]);

    if (!weatherResponse.ok) {
      const errorData = await weatherResponse.json();
      return NextResponse.json(
        { error: errorData.reason || 'Failed to fetch weather data.' },
        { status: weatherResponse.status }
      );
    }

    const [data, geoData] = await Promise.all([weatherResponse.json(), geoResponse.json()]);

    if (!data.current_weather || !data.daily) {
      throw new Error('Invalid data structure from weather API.');
    }

    const { description: currentDescription, icon: currentIcon } = mapWeatherCode(
      data.current_weather.weathercode,
      data.current_weather.is_day === 1
    );

    const dailyForecast = data.daily.time.map((date: string, index: number) => {
      const { description, icon } = mapWeatherCode(data.daily.weathercode[index], true); // Always use day icons for forecast
      return {
        date,
        description,
        icon,
        temp_max: data.daily.temperature_2m_max[index],
        temp_min: data.daily.temperature_2m_min[index],
      };
    });

    const simplifiedData = {
      temp: data.current_weather.temperature,
      // Use apparent_temperature for a more accurate "feels like" value
      feels_like: data.current_weather.apparent_temperature,
      description: currentDescription,
      icon: currentIcon,
      city: geoData.city || 'Unknown Location',
      country: geoData.countryCode || '',
      forecast: dailyForecast,
    };

    return NextResponse.json(simplifiedData);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An internal server error occurred.';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}