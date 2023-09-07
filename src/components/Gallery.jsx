import React, { useCallback, useContext, useRef } from "react";
import { useImageSearch } from "../hooks/useImageSearch";
import { StateContext } from "../context/StateContextProvider";
import Popup from "./Popup";

const Gallery = () => {
  const { setShow, setData, setScroll } = useContext(StateContext);
  const { pics, hasMore, loading, error, setPageNumber } = useImageSearch();

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

  return (
    <>
      <Popup />
      <div className="card-list">
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

export default Gallery;
