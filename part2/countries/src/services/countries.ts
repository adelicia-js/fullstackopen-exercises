import axios from "axios";

const baseURL = `https://studies.cs.helsinki.fi/restcountries`;
const genericEndPoint = `/api/all`;
const specificEndPoint = `/api/name`;

const getAllCountryData = () => {
  const request = axios.get(`${baseURL}${genericEndPoint}`);
  return request.then((response) => response.data);
};

const getSpecificCountryData = (name: string) => {
  const request = axios.get(`${baseURL}${specificEndPoint}/${name}`);
  return request.then((response) => response.data);
}

export default { getAllCountryData, getSpecificCountryData };
