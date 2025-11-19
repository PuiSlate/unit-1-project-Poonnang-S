import RecipeCard from "./RecipeCard";
import { mockRecipes } from "../../../test-data/mockRecipe";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate();

    return (
        <main className="recipes-page">
            <h1>All Recipes</h1>

            <div className="recipes-grid">
                {mockRecipes.map((recipe) => (
                    <RecipeCard 
                        key={recipe.id} 
                        recipe={recipe}
                        onClick={() => navigate(`/recipes/${recipe.id}`)}
                    />
                ))}
            </div>
        </main>
    );
};

export default RecipesPage;
