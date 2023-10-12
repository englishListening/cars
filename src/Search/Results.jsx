import { useState } from "react";
import Search from "./Search";
import { SearchResultsList } from "./SearchResultsList";
function Result() {
    const [results,setResults] = useState([])

    return(
        <div>
            <div className="result">
                <Search setResults={setResults}/>
                <SearchResultsList results = {results}/>
            </div>
        </div>
    )
}

export default Result