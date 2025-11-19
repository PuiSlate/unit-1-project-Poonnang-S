import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to /recipes with query as URL param
    navigate(`/recipes?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Potion Smith</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
      </ul>

      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search recipes…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" aria-label="Search">
          🔍
        </button>
      </form>
    </div>
  );
};

export default NavBar;
