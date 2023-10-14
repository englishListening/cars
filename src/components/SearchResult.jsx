import "./SearchResult.css";

export const SearchResult = ({ result , type}) => {
  return (
    <div
      className="search-result"
      
    >
      {result} <br />
      {type}
    </div>
  );
};
