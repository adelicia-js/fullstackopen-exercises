import axios from "axios";

const baseURL = `https://studies.cs.helsinki.fi/restcountries`;
const genericEndPoint = `/api/all`;
const specificEndPoint = `/api/name`;

const getAllCountryData = async () => {
  const request = axios.get(`${baseURL}${genericEndPoint}`);
  const response = await request;
  return response.data;
};

const getSpecificCountryData = async (name: string) => {
  const request = axios.get(`${baseURL}${specificEndPoint}/${name}`);
  const response = await request;
  return response.data;
}

export default { getAllCountryData, getSpecificCountryData };
