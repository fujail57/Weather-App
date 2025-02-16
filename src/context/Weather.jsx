import React, { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../Api/weatherApi";

//Create context
const weatherContext = createContext(null);

// create hook to use weatherContext
export const useWeather = () => {
  return useContext(weatherContext);
};

const WeatherProvider = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  // fetch weather data using api
  const fetchData = async () => {
    const responce = await getWeatherDataForCity(searchCity);
    setWeatherData(responce);
  };

  return (
    <weatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        searchCity,
        setSearchCity,
        fetchData,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
