import { useEffect, useState } from "react";

// utils
import countryServices from "./services/countries";
import { CountryData } from "./types";
import { filteredCountries } from "./utils";

// components
import Search from "./components/Search";
import Country from "./components/Country";
import CountryList from "./components/CountryList";
import Loading from "./components/Loading";

// styles
import "./App.css";

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countryServices.getAllCountryData().then((data) => setCountries(data));
  }, []);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    if (countries.length === 1) {
      countryServices.getAllCountryData().then((data) => setCountries(data));
    }
  };

  const handleSpecificCountry = (countryName: string) => {
    countryServices.getSpecificCountryData(countryName).then((data) => {
      setCountries([data]);
    });
  };

  const render = () => {
    const filteredCountriesResult = filteredCountries(countries, search);

    if (search.length > 0) {
      if (filteredCountriesResult.length > 10) {
        return (
          <div className="countryList">
            Too many matches, specify another filter.
          </div>
        );
      } else if (
        filteredCountriesResult.length > 1 &&
        filteredCountriesResult.length <= 10
      ) {
        return filteredCountriesResult.map((country) => {
          return (
            <CountryList
              {...country}
              handleClick={() => handleSpecificCountry(country.name.common)}
            />
          );
        });
      } else if (filteredCountriesResult.length === 1) {
        return <Country {...filteredCountriesResult[0]} />;
      }
    }
  };

  return (
    <div>
      <h1 className="appTitle">
        <span className="appTitleHead">Country Info </span>App{`📌🗺️`}
      </h1>
      <Search searchQuery={search} handleSearchInput={handleSearchInput} />
      {countries ? render() : <Loading />}
    </div>
  );
}

export default App;
