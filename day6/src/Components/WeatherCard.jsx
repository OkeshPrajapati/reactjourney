import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white/90 rounded-2xl shadow-lg p-6 w-[300px] text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {weather.location.name}, {weather.location.country}
      </h2>
      <p className="text-lg text-gray-600 capitalize">
        {weather.current.condition.text}
      </p>
      <img
        src={weather.current.condition.icon}
        alt="weather icon"
        className="mx-auto my-2"
      />
      <p className="text-5xl font-bold text-blue-600 my-4">
        {Math.round(weather.current.temp_c)}°C
      </p>
      <div className="flex justify-between text-gray-700 text-sm">
        <p>Humidity: {weather.current.humidity}%</p>
        <p>Wind: {weather.current.wind_kph} kph</p>
      </div>
    </div>
  );
};

export default WeatherCard;
