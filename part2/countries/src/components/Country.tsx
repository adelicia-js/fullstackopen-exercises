import { CountryData } from "../types";

export default function Country(props: CountryData) {
  const mapLanguages = () => {
    const langObject = props.languages;
    const langValues = Object.values(langObject);
    return langValues.map((language) => <li key={language}>{language}</li>);
  };

  return (
    <div>
      <h2>{props.name.common}</h2>
      <p>Capital: {props.capital}</p>
      <p>Population: {props.area} sq. km</p>
      <p>Languages:</p>
      <ul>{mapLanguages()}</ul>
      <img src={props.flags.png} alt="country flag" />
    </div>
  );
}
