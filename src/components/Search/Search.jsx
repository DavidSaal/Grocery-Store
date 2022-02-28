import React from "react";
import "./Search.css";

const Search = ({ setSearchedValue, placeholder, ...other }) => {
  return (
    <div className="input-group shadow-sm border rounded py-1">
      <input
        type="search"
        placeholder={placeholder}
        className="form-control border-0 bg-white"
        onChange={(event) => setSearchedValue(event.target.value)}
      />
      <button type="submit" className="btn btn-search me-2" {...other} />
    </div>
  );
};

export default Search;
