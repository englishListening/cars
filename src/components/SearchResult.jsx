import "./SearchResult.css";
import { Link } from "react-router-dom";
export const SearchResult = ({ result , type , id}) => {
  return (
    <div
      className="search-result"
      
    >
      <Link to={`/katalog/${id}`}>
      <p>{result}</p> 
      <p>{type}</p>
      </Link>
      
    </div>
  );
};
