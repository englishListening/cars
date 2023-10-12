import React from "react";
import "./Search.css"
export const SearchResults = ({result}) => {
    return <a className="add" href="">
        <div className="res">
            <i>{result.name}</i>    
            <em>{result.type}</em>
        </div>
    </a>
}