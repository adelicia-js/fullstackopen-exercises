import { useState, useEffect } from "react";

// utils
import { CountryData, WeatherData } from "../types";
import countryServices from "../services/countries";
import { celsiusTemp } from "../utils";

import Loading from "./Loading";

export default function Country(props: CountryData) {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const mapLanguages = () => {
    const langObject = props.languages;
    const langValues = Object.values(langObject);
    return langValues.map((language) => <li key={language}>{language}</li>);
  };

  useEffect(() => {
    countryServices
      .getCountryWeather(props.latlng[0], props.latlng[1])
      .then((data) => {
        setWeatherData(data);
      });
  }, [props.latlng]);

  return (
    <div className="countryContainer">
      <img src={props.flags.png} alt="country flag" />
      <div className="countryDataContainer">
        {props ? (
          <div className="countryData">
            <h2>{props.name.common}</h2>
            <p>Capital: {props.capital}</p>
            <p>Area: {props.area} sq. km.</p>
            <p>Languages:</p>
            <ul>{mapLanguages()}</ul>
          </div>
        ) : (
          <div className="countryData loadingContainer">
            {" "}
            <Loading />
          </div>
        )}

        {weatherData ? (
          <div className="weatherData">
            <h2>Weather in {props.capital}</h2>
            <p>Temperature: {celsiusTemp(weatherData.main.temp)}° Celsius</p>
            <p>Wind: {weatherData.wind.speed}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        ) : (
          <div className="weatherData loadingContainer">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
