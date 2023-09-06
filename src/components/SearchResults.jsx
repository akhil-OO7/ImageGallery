import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../context/StateContextProvider";

const SearchResults = () => {
  const { pics } = useContext(StateContext);
  const result = useRef();
  useEffect(() => {
    result.current.scrollIntoView({ behavior: "smooth" });
  }, [pics]);

  return (
    <>
      <div className="card-list" ref={result}>
        {pics &&
          pics.map((pic) => (
            <div className="card" key={pic.id}>
              <img
                className="card-image"
                alt={pic.alt_description}
                src={pic.urls.small}
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
