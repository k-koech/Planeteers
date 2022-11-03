import React from "react";

function SearchBar({ search, handleSearch }) {
  return (
    <div className="search">
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <input className="searchTerm" type="text" placeholder="What would you like to search for?"
       value={search} onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
