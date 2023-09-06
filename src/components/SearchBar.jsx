import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateContextProvider";
import { useImageSearch } from "../hooks/useImageSearch";

const SearchBar = () => {
  const { query, setQuery, setPageNumber } = useContext(StateContext);
  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
    query != e.target[0].value && setPageNumber(1);
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <input
          type="text"
          name="query"
          className="search-box"
          placeholder="Search Image"
          autoComplete="off"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
