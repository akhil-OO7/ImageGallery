import Gallery from "./components/Gallery";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Gallery />
        {/* <SearchBar /> */}
      </div>
    </>
  );
}

export default App;
