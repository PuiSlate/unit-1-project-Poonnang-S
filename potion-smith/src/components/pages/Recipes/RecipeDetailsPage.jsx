import { useParams, useNavigate } from "react-router-dom";
import { mockRecipes } from "../../../test-data/mockRecipe";
import { recipeImages } from "../../../assets/images/images";

const RecipeDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

     const recipe = mockRecipes.find(r => r.id === parseInt(id));

    if (!recipe) {
        return (
            <main className="recipe-details-page">
                <h2>Recipe not found</h2>
                <button onClick={() => navigate("/recipes")}>Back to All Recipes</button>
            </main>
        );
    }

    return (
        <main className="recipe-details-page">
            <button className="back-button" onClick={() => navigate("/recipes")}>
                ← Back to All Recipes
            </button>

            <div className="recipe-details-header">
                <img 
                    className="recipe-details-image"
                    src={recipe.imageID ? recipeImages[recipe.imageID] : recipeImages["fallback.jpg"]}
                    alt={recipe.name}
                />
                <div>
                    <h1>{recipe.name}</h1>
                    <h3>{recipe.category}</h3>
                </div>
            </div>

            <section>
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Instructions</h2>
                <ol>
                    {recipe.instructions?.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </section>
        </main>
    );
};

export default RecipeDetailsPage;