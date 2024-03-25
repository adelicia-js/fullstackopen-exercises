import { useEffect, useState } from "react";

// utils
import countryServices from "./services/countries";
import { CountryData } from "./types";
import { filteredCountries } from "./utils";

// components
import Country from "./components/Country";
import Search from "./components/Search";

// styles
import "./App.css";

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countryServices.getAllCountryData().then((data) => setCountries(data));
  }, []);

  const render = () => {
    const filteredCountriesResult = filteredCountries(countries, search);

    if (search.length > 0) {
      if (filteredCountriesResult.length > 10) {
        return <div>Too many matches, specify another filter</div>;
      } else if (
        filteredCountriesResult.length > 1 &&
        filteredCountriesResult.length <= 10
      ) {
        return filteredCountriesResult.map((country) => {
          return <p key={country.name.common}>{country.name.common}</p>;
        });
      } else if (filteredCountriesResult.length === 1) {
        return (
          <Country
            name={filteredCountriesResult[0].name}
            capital={filteredCountriesResult[0].capital}
            area={filteredCountriesResult[0].area}
            languages={filteredCountriesResult[0].languages}
            flags={filteredCountriesResult[0].flags}
          />
        );
      }
    }
  };

  return (
    <div>
      <h1>Country Info App📌🗺️</h1>
      <Search
        searchQuery={search}
        handleSearchInput={(event) => setSearch(event.target.value)}
      />
      {render()}
    </div>
  );
}

export default App;
