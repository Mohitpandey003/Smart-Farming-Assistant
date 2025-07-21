import { useState, useEffect } from "react";

const WeatherAnalysis = () => {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = "319cfdb17d52076070ce5aead2aa1d87"; // Replace with your actual API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather data once when component mounts
  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  // Determine a background image URL based on weather condition (optional)
  let weatherBackground =
    "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/66fc9468e82a4f5109b0a143_ocvjt9okrjv66jajk8ad.jpeg"; // default background
  if (weatherData) {
    const condition = weatherData.weather[0].main.toLowerCase();
    if (condition.includes("clear")) {
      weatherBackground =
        "https://wallpapers.com/images/hd/fine-weather-landscape-iq9k6ubn8w9yhhkc.jpg";
    } else if (condition.includes("cloud")) {
      weatherBackground =
        "https://enlightphoto.com/wp-content/uploads/2018/12/180413_BA3-0033_1200-1024x683.jpg";
    } else if (condition.includes("rain")) {
      weatherBackground =
        "https://t3.ftcdn.net/jpg/11/31/36/78/360_F_1131367824_zeiMnY7m8EVgULnyJcmgfP2E40dgNtHa.jpg";
    } else if (condition.includes("snow")) {
      weatherBackground = "https://wallpapercave.com/wp/HkQoLzi.jpg";
    }
  }

  // OpenWeatherMap weather icon URL
  const iconUrl = weatherData
    ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <div className="relative min-h-screen">
      {/* Full-Screen Background Image with Opacity Overlay */}
      <div className="absolute inset-0 p-0">
        <img
          src={weatherBackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Weather Analysis
          </h1>
          <div className="flex justify-center mb-6">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              className="w-full md:w-3/4 p-3 border border-gray-300 rounded-l-md focus:outline-none placeholder-white text-white bg-transparent"
            />
            <button
              onClick={() => fetchWeatherData(city)}
              className="p-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              Get Weather
            </button>
          </div>
          {loading && (
            <p className="text-center text-blue-200">Loading weather data...</p>
          )}
          {error && <p className="text-center text-red-400">{error}</p>}
          {weatherData && (
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-2xl transition transform hover:scale-105">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {weatherData.name}
              </h2>
              <div className="flex items-center mb-4">
                {iconUrl && (
                  <img src={iconUrl} alt="weather icon" className="w-16 h-16" />
                )}
                <div className="ml-4">
                  <p className="text-xl text-gray-800">
                    {weatherData.main.temp}°C
                  </p>
                  <p className="capitalize text-gray-700">
                    {weatherData.weather[0].description}
                  </p>
                </div>
              </div>
              <p className="mb-2 text-gray-700">
                Humidity: {weatherData.main.humidity}%
              </p>
              <p className="mb-2 text-gray-700">
                Wind Speed: {weatherData.wind.speed} m/s
              </p>
              <p className="mb-2 text-gray-700">
                Pressure: {weatherData.main.pressure} hPa
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherAnalysis;
