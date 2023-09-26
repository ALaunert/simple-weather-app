/* eslint-disable no-unused-vars */

import "./App.css";
import { useState } from "react";
import { useGetWeather } from "./queryhooks/useGetWeather";
import WeatherCard from "./components/WeatherCard";
import SearchForm from "./components/SearchForm";
import SpinnerMini from "./components/SpinnerMini";
import { useGetForecast } from "./queryhooks/useGetForecast";
import FiveDayGraph from "./components/FiveDayGraph";

function App() {
  const [city, setCity] = useState("London");

  const {
    isLoading: isLoadingWeather,
    data: weatherData,
    error: weatherError,
    isFetching: isFetchingWeather,
  } = useGetWeather(city);

  const {
    isLoading: isLoadingForecast,
    data: forecastData,
    error: forecastError,
    isFetching: isFetchingForecast,
  } = useGetForecast(city);
  return (
    <>
      <SearchForm city={city} handleChange={(e) => setCity(e.target.value)} />
      {!isFetchingWeather && !isLoadingWeather ? (
        weatherError ? (
          <p>{weatherError.message}</p>
        ) : (
          <WeatherCard weatherData={weatherData} />
        )
      ) : (
        <SpinnerMini />
      )}
      {!isFetchingForecast && !isLoadingForecast ? (
        forecastError ? (
          <p>{forecastError.message}</p>
        ) : (
          <FiveDayGraph forecastData={forecastData} />
        )
      ) : (
        <SpinnerMini />
      )}
    </>
  );
}

export default App;
