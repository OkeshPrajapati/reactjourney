import React, { useEffect, useState } from "react";
import axios from "axios";

import { AirVent, Droplet, Thermometer, Wind } from "lucide-react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar ";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState("bihar");
  const [isLoading, setIsLoading] = useState(true);
  console.log(weatherData);

  let fetchWeatherApi = async (city) => {
    try {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=f20c9e82df1f4b63a6881744253009&q=${city}&aqi=no`
        
      );
      if (response) {
        setWeatherData(response.data);
      }
    } catch (error) {
      console.log("error in api");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchWeatherApi(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="h-screen w-full flex flex-col gap-20 items-center">
      <Navbar setSearch={setSearch} />

      {isLoading ? (
        "Loading data"
      ) : (
        <div className="flex flex-col gap-10">
          <div className="w-[70%]">
            <h1 className="text-4xl font-bold mb-5">
              {weatherData?.location?.name}
            </h1>
            <p className="text-xl text-gray-400">
              {weatherData?.current?.condition?.text}
            </p>
          </div>
          <div className="flex gap-5">
            <Card
              title={"Temperature"}
              value={`${weatherData?.current?.temp_c} °C`}
              icon={Thermometer}
            />

            <Card
              title={"Humidity"}
              value={`${weatherData?.current?.humidity} %`}
              icon={Droplet}
            />

            <Card
              title={"Winds"}
              value={`${weatherData?.current?.wind_kph} kph`}
              icon={Wind}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;