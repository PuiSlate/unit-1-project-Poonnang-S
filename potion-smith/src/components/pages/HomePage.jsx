import { Link } from "react-router-dom";
import { recipeImages } from "../../assets/images/images";

const featuredRecipes = [
  { id: 8, name: "Ranger's Feral Senses", imageID: "rangers-feral-senses.jpg" },
  { id: 4, name: "The Hellfire Draught Margarita", imageID: "hellfire-draught-margarita.jpg" },
  { id: 2, name: "Bard's Song of Rest", imageID: "bard-song-of-rest.jpg" },
  { id: 6, name: "The Balder's Gate Gourd", imageID: "the-balders-gate-gourd.jpg" }
];

const HomePage = () => {
  return (
    <main>
      <div className="homepage-carousel">
        <h1>Featured This Week</h1>
        {featuredRecipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="carousel-item">
            <img
              src={recipeImages[recipe.imageID]}
              alt={recipe.name}
              className="carousel-image"
            />
            <div className="carousel-name">{recipe.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
