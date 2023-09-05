import React from "react";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=xvGMGxAFGKn5PG7DIOwAWXWkdZZZuOdRjDpOK7KP3cg`
    );
    const json = await response.json();
    if (response.ok) {
      setPics(json.results);
    }
    if (!response.ok) {
      console.log(json.errors);
    }
  };

  return (
    <>
      <div className="card-list">
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
      </div>
    </>
  );
};

export default SearchResults;
