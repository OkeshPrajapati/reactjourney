import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./Components/WeatherCard";
// import WeatherCard from "./Component/WeatherCard";

const API_KEY = "f20c9e82df1f4b63a6881744253009"; // Api key

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      setWeather(res.data);
      setError("");
    } catch (err) {
      setError(" City not found! Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <h1 className="text-3xl font-bold text-white mb-6">
        🌤️ React Weather App 
      </h1>

      {/* Input + Button */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 outline-none text-gray-800"
        />
        <button
          onClick={getWeather}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-200 font-medium mb-4">{error}</p>}

      {/* Weather card */}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
