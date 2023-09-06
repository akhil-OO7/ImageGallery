import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateContextProvider";

const SearchBar = () => {
  const { setPics } = useContext(StateContext);
  const [query, setQuery] = useState("");
  const searchPhotos = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=xvGMGxAFGKn5PG7DIOwAWXWkdZZZuOdRjDpOK7KP3cg`
    );
    const json = await response.json();
    if (response.ok) {
      setPics(json.results);
      console.log(json.results);
    }
    if (!response.ok) {
      console.log(json.errors);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <input
          type="text"
          name="query"
          className="search-box"
          placeholder="Search Box"
          value={query}
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
