import { useState } from "react";

import "./Result.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import { Link } from "react-router-dom";

function Results() {
  const [results, setResults] = useState([]);

  return (
    <div className="Results">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default Results;
