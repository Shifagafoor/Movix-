import {useState} from "react";
import "../styles/searchbar.css";

function SearchBar() {
    const [searchText, setSearchText] = useState("");

    function handleSearch() {
        alert(searchText);
    }
    return(
        <div className = "search">
            <input className="search-input" type="text" 
            placeholder="Search for a movie" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}/>
             <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}


export default SearchBar;