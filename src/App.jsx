import "./App.css";
import Navbar from "./components/navbar";
import SearchBar from "./components/SearchBar";
import Hero from "./components/hero";
import Moviecard from "./components/moviecard"
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <h1>Movix</h1> */}
      {/* <p>Discover your Favorite Movies</p> */}
      <SearchBar/>
      <Moviecard/>  
    </div>
  );
}

export default App;