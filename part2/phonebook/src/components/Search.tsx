import {SearchProps} from "../types"

export default function Search(props: SearchProps) {
    return (
        <p>
        Filter shown with:{" "}
        <input value={props.searchQuery} onChange={props.handleSearchInput} />
      </p>
    )
}