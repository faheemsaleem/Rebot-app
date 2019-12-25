import React from "react";
import "./search-box.style.css"
const SearchField = (props ) => {
  return (
    <input
      type="search"
      className="search"
      placeholder="Search users..."
      onChange={props.OnChangeSearchField}
    />
  );
};

export default SearchField;
