const HomePage = () => {
   const featuredRecipes = [
    {
      id: 1,
      name: "Ranger's Feral Senses",
      image: "/assets/images/rangers-feral-senses.jpg",
      url: "https://www.potionsmith.com/recipes/rangers-feral-senses"
    },
    {
      id: 2,
      name: "The Hellfire Draught Margarita",
      image: "/assets/images/hellfire-draught-margarita.jpg",
      url: "https://www.potionsmith.com/recipes/hellfire-margarita"
    },
    {
      id: 3,
      name: "Bard's Song of Rest",
      image: "/assets/images/bard-song-of-rest.jpg",
      url: "https://www.potionsmith.com/recipes/bard-song-of-rest"
    }
  ];

  return (
    <main>
      <div className="homepage-carousel">
        <h1>Featured This Week</h1>

        {featuredRecipes.map((recipe) => (
          <a key={recipe.id} href={recipe.url}>
            <img src={recipe.image} alt={recipe.name} />
          </a>
        ))}
      </div>
    </main>
  );
};

export default HomePage;