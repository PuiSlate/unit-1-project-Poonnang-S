import RecipeCard from "./RecipeCard";
import { mockRecipes } from "../../../test-data/mockRecipe";
const RecipesPage = () => {
    return (
        <main className="recipes-page">
            <h1>All Recipes</h1>

            <div className="recipes-grid">
                {mockRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </main>
    );
};

export default RecipesPage;