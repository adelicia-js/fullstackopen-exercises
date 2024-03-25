import axios from "axios";

const baseURL = `https://studies.cs.helsinki.fi/restcountries`;
const genericEndPoint = `/api/all`;
const specificEndPoint = `/api/name`;
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const getAllCountryData = async () => {
  const request = axios.get(`${baseURL}${genericEndPoint}`);
  const response = await request;
  return response.data;
};

const getSpecificCountryData = async (countryName: string) => {
  const request = axios.get(`${baseURL}${specificEndPoint}/${countryName}`);
  const response = await request;
  return response.data;
};

const getCountryWeather = async (lat: number, lon: number) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&exclude=minutely,alerts,hourly,daily`
  );
  const response = await request;
  return response.data;
};

export default { getAllCountryData, getSpecificCountryData, getCountryWeather };
