

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">Potion Smith</a>
      </div>

      <ul className="navbar-links">
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/subscribe">Subscribe</a></li>
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
