const NavBar = () => {
    return (
       <nav className = "navbar">
           <div className="navbar-left">
                <a href="/" className="logo">Potion Smith</a>
            </div>

            {/* Nav links */}
            <div className="navbar-cener">
               <ul className="navbar-links">

                <li>
                    <a href="/recipes">Recipes</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>"
                </li>
                <li>
                    <a href="/subscribe">Subscribe</a>"
                </li>
                </ul> 
            {/* Search Input */}
                <form className="navbar-search" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search recipes…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="search-input" />
                 <button type="submit" className="search-button" aria-label="Search">🔍</button>   
                 </form>   
            </div>                
                                                    
                            
        </nav>
      
    )
}

export default NavBar;