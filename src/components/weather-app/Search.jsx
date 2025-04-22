import React, { useState } from "react";
import "./styles.css";

const Search = ({ handleSearch }) => {
  const [searchVal, setSearch] = useState("");
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City to Search..."
        value={searchVal}
        name="search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="button" onClick={() => handleSearch(searchVal)}>Search Weather</button>
    </div>
  );
};

export default Search;
