import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);
  return (
    <StateContext.Provider value={{ pics, setPics }}>
      {children}
    </StateContext.Provider>
  );
};
