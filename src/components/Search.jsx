import React from "react";

const Search = ({ searchProduct }) => {
  return (
    <form>
      <input
        onChange={(e) => searchProduct(e.target.value)}
        type="search"
        placeholder="Search..."
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
