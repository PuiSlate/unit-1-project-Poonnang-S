import { recipeImages } from "../../assets/images/images";

const featuredRecipes = [
  {
    id: 1,
    name: "Ranger's Feral Senses",
    imageID: "rangers-feral-senses.jpg",
    url: "https://www.potionsmith.com/recipes/rangers-feral-senses"
  },
  {
    id: 2,
    name: "The Hellfire Draught Margarita",
    imageID: "hellfire-draught-margarita.jpg",
    url: "https://www.potionsmith.com/recipes/hellfire-margarita"
  },
  {
    id: 3,
    name: "Bard's Song of Rest",
    imageID: "bard-song-of-rest.jpg",
    url: "https://www.potionsmith.com/recipes/bard-song-of-rest"
  },
  {
    id: 4,
    name: "The Balder's Gate Gourd",
    imageID: "the-balders-gate-gourd.jpg",
    url: "https://www.potionsmith.com/recipes/the-balders-gate-gourd"
  }
];

const HomePage = () => {
  return (
    <main>
      <div className="homepage-carousel">
        <h1>Featured This Week</h1>
        {featuredRecipes.map((recipe) => (
          <a key={recipe.id} href={recipe.url}>
            <img
              src={recipeImages[recipe.imageID]}
              alt={recipe.name}
              className="carousel-image"
            />
            <div className="carousel-name">{recipe.name}</div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
