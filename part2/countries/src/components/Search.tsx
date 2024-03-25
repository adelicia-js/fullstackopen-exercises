import { SearchItem } from "../types";

export default function Search(props: SearchItem) {
  return (
    <p>
      Find countries:{" "}
      <input
        value={props.searchQuery}
        onChange={props.handleSearchInput}
      />
    </p>
  );
}
