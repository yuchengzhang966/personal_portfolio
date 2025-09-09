import { NextRequest, NextResponse } from 'next/server';

// Helper to map WMO weather codes to descriptions and OpenWeatherMap icon codes
function mapWeatherCode(code: number, isDay: boolean): { description: string; icon: string } {
  const descriptions: { [key: number]: string } = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Fog', 48: 'Depositing rime fog',
    51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
    61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
    71: 'Slight snow fall', 73: 'Moderate snow fall', 75: 'Heavy snow fall',
    80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail',
  };

  const icons: { [key: number]: string } = {
    0: '01', 1: '02', 2: '03', 3: '04', 45: '50', 48: '50',
    51: '09', 53: '09', 55: '09', 61: '10', 63: '10', 65: '10',
    71: '13', 73: '13', 75: '13', 80: '09', 81: '09', 82: '09',
    95: '11', 96: '11', 99: '11',
  };

  const description = descriptions[code] || 'Unknown weather';
  const iconCode = icons[code] || '01';
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
  const forecastApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    const response = await fetch(forecastApiUrl, {
      next: { revalidate: 600 }, // Revalidate every 10 minutes
    });
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.reason || 'Failed to fetch weather data.' },
        { status: response.status }
      );
    }

    if (!data.current_weather) {
      throw new Error('Invalid data structure from weather API.');
    }

    const { description, icon } = mapWeatherCode(
      data.current_weather.weathercode,
      data.current_weather.is_day === 1
    );

    // Use a free reverse geocoding API to get city/country name from coordinates
    const reverseGeocodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
    const geoResponse = await fetch(reverseGeocodeUrl);
    const geoData = await geoResponse.json();

    const simplifiedData = {
      temp: data.current_weather.temperature,
      // Open-Meteo doesn't provide feels_like, so we approximate it with temp
      feels_like: data.current_weather.temperature,
      description: description,
      icon: icon,
      city: geoData.city || 'Unknown Location',
      country: geoData.countryCode || '',
    };

    return NextResponse.json(simplifiedData);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}