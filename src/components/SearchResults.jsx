import { useImageSearch } from "../hooks/useImageSearch";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { StateContext } from "../context/StateContextProvider";
import Popup from "./Popup";

const SearchResults = () => {
  const { query, setData, setShow, setScroll } = useContext(StateContext);
  const { pics, hasMore, setPageNumber, loading } = useImageSearch();

  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const result = useRef();
  useEffect(() => {
    setTimeout(
      () => result.current.scrollIntoView({ behavior: "smooth" }),
      500
    );
  }, [query]);

  return (
    <>
      <Popup />
      <div className="card-list" ref={result}>
        {pics.map((pic, idx) => {
          if (idx + 1 === pics.length) {
            return (
              <div
                className="card"
                key={pic.id}
                ref={lastImageElementRef}
                onClick={() => {
                  setData(pic);
                  setShow(true);
                  setScroll(false);
                }}
              >
                <img
                  className="card-image"
                  alt={pic.alt_description}
                  src={pic.urls.small}
                  width="50%"
                  height="50%"
                ></img>
              </div>
            );
          }
          return (
            <div
              className="card"
              key={pic.id}
              onClick={() => {
                setData(pic);
                setShow(true);
                setScroll(false);
              }}
            >
              <img
                className="card-image"
                alt={pic.alt_description}
                src={pic.urls.small}
                width="50%"
                height="50%"
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
