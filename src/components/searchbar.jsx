import "../styles/searchbar.css";

function SearchBar() {
    return(
        <div className = "search">
            <input className="search-input" type="text" placeholder="Search for a movie" />
            <button>search</button>
        </div>
    );
}


export default SearchBar;