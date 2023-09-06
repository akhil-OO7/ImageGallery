import { useContext, useEffect } from "react";
import { StateContext } from "../context/StateContextProvider";

export const useImageSearch = () => {
  const {
    pics,
    setPics,
    setLoading,
    setError,
    query,
    pageNumber,
    hasMore,
    setHasMore,
    setPageNumber,
  } = useContext(StateContext);

  const random = `https://api.unsplash.com/photos?page=${pageNumber}&client_id=xvGMGxAFGKn5PG7DIOwAWXWkdZZZuOdRjDpOK7KP3cg`;
  const search = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${query}&client_id=xvGMGxAFGKn5PG7DIOwAWXWkdZZZuOdRjDpOK7KP3cg`;
  const fetchImages = async () => {
    setLoading(true);
    setError(false);
    let json, response;
    if (query) {
      response = await fetch(search);
      json = (await response.json()).results;
    } else {
      response = await fetch(random);
      json = await response.json();
    }
    setHasMore(json.length > 0);
    if (response.ok) {
      console.log(json);
      setLoading(false);
      if (pageNumber === 1) {
        setPics(json);
      } else {
        setPics((prevPics) => {
          return [...new Set([...prevPics, ...json])];
        });
      }
    }
    if (!response.ok) {
      setError(json.errors);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query, pageNumber]);

  return { pics, setPics, query, hasMore, setPageNumber };
};
