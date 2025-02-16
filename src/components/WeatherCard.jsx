import React from "react";
import { useWeather } from "../context/Weather";

const WeatherCard = () => {
  const weather = useWeather();

  return (
    <div>
      <img src={weather.weatherData?.current?.condition?.icon} alt="" />
      <h4>Temp{weather.weatherData?.current?.temp_c}</h4>
      <p>Location</p>
    </div>
  );
};

export default WeatherCard;
