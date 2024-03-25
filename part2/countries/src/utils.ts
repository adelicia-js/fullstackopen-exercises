import { CountryData } from "./types";

export const filteredCountries = (
  countries: CountryData[],
  searchQuery: string
) => {
  return countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });
};

export const celsiusTemp = (temp: number) => {
  return Math.round(temp - 273.15);
}