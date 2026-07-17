import "../styles/moviecard.css";
import vazha from "../assets/vazha 2.png";

function moviecard(){
    return(
        <div className = "movie-card">
            <img src= {vazha} alt="Movie Poster" className="movie-post"/>
            <div className="movies-things">
                <h2>Movie Title</h2>
                <p>⭐8.5</p>
            </div>
        </div>
        
    );
}
export default moviecard;
