import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { StateContext } from "../context/StateContextProvider";

const Header = () => {
  const { setPageNumber, setQuery } = useContext(StateContext);
  return (
    <>
      <header className="header-section">
        <div className="header-content">
          <h1
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setQuery("");
              setPageNumber(1);
            }}
          >
            Stock Gallery
          </h1>
          <p className="subhead">
            The internet’s source for visuals. Powered by creators everywhere.
          </p>
          <SearchBar />
        </div>
      </header>
    </>
  );
};

export default Header;
