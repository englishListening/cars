import React from "react";
import { SearchResults } from "./SearchResults";
export const SearchResultsList = ({results}) => {
    return(
        <div className="">
            {
                results.map((result,id) => {
                    return <SearchResults result={result} key={id}/>
                })
            }
        </div>
    )
}