import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [pics, setPics] = useState([]);
  const fetchImages = async () => {
    const response = await fetch(
      "https://api.unsplash.com/photos?page=1&client_id=xvGMGxAFGKn5PG7DIOwAWXWkdZZZuOdRjDpOK7KP3cg"
    );
    const json = await response.json();
    if (response.ok) {
      setPics(json);
      console.log(json);
    }
    if (!response.ok) {
      console.log(json.errors);
    }
  };
  useEffect(() => {
    fetchImages();
  }, [pics]);
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

export default Gallery;
