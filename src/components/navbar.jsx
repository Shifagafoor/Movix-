import "../styles/navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <h2 className = "logo">Movix</h2>
            <ul className="nav-links">
                <li>Home</li>
                <li>Movies</li>
                <li>Favorites</li>
            </ul>
        </nav>
    )
}
export default Navbar;