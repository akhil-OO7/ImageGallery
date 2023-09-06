import { useContext } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { StateContext } from "./context/StateContextProvider";
import SearchResults from "./components/SearchResults";

function App() {
  const { pics } = useContext(StateContext);
  return (
    <>
      <Header />
      <div className="container">
        {/* <SearchResults /> */}
        {pics.length !== 0 ? <SearchResults /> : <Gallery />}
      </div>
    </>
  );
}

export default App;
