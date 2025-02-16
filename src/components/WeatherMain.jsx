import React from "react";
import Input from "./Input";
import WeatherCard from "./WeatherCard";
import Button from "./Button";
import { useWeather } from "../context/Weather";

const WeatherMain = () => {
  const weather = useWeather();
  return (
    <div>
      <h2>Weather Forcast App</h2>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <WeatherCard />
    </div>
  );
};

export default WeatherMain;
