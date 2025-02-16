const BaseUrl =
  "https://api.weatherapi.com/v1/current.json?key=c51d25cf40fd4bdd835113844251402";

export const getWeatherDataForCity = async (city) => {
  const responce = await fetch(`${BaseUrl}&q=${city}&aqi=yes`, {
    method: "GET",
  });
  return await responce.json();
};

//   https://api.weatherapi.com/v1/current.json?key=c51d25cf40fd4bdd835113844251402&q=london&aqi=yes
