import { SearchItem } from "../types";

export default function Search(props: SearchItem) {
  return (
    <p className="filterBar">
      Find countries:{" "}
      <input
        className="searchInput"
        value={props.searchQuery}
        onChange={props.handleSearchInput}
      />
    </p>
  );
}
