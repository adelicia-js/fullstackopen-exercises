import { CountryListItem } from "../types";

export default function CountryList(props: CountryListItem) {
  return (
    <div className="countryList">
      <p key={props.name.common}>{props.name.common}</p>
      <button className="listBtn" onClick={props.handleClick}>Show</button>
    </div>
  );
}
