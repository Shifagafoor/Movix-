import "./App.css";
import Navbar from "./components/navbar";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div>
      <Navbar/>
      <h1>Movix</h1>
      <p>Discover your Favorite Movies</p>
      <SearchBar/>
    </div>
  );
}

export default App;