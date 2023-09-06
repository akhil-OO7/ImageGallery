import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="header-content">
          <h1 className="logo">Image Gallery</h1>
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
