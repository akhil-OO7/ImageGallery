import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <StateContext.Provider
      value={{
        pics,
        setPics,
        query,
        setQuery,
        error,
        setError,
        loading,
        setLoading,
        hasMore,
        setHasMore,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
