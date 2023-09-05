import React, { useEffect, useState } from "react";

const SearchBar = () => {
  // const [query, setQuery] = useState("");
  // const [pics, setPics] = useState([]);
  // const searchPhotos = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(
  //     `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=xvGMGxAFGKn5PG7DIOwAWXWkdZZZuOdRjDpOK7KP3cg`
  //   );
  //   const json = await response.json();
  //   if (response.ok) {
  //     setPics(json.results);
  //   }
  //   if (!response.ok) {
  //     console.log(json.errors);
  //   }
  // };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "cat"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {/* <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default SearchBar;
