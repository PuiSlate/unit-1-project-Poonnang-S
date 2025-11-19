import RecipeCard from "./RecipeCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipesPage = ({ recipes, searchQuery}) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate();

    const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

    return (
        <main className="recipes-page">
            <h1>All Recipes</h1>

            <select
             value={selectedCategory}
             onChange={(e) => setSelectedCategory(e.target.value)}
           >
             <option value="">All Categories</option>
             <option value="Gin">Gin</option>
             <option value="Tequila">Tequila</option>
             <option value="Rum">Rum</option>
             <option value="Vodka">Vodka</option>
             <option value="Mocktail">Mocktail</option>
             </select>

            <div className="recipes-grid">
                {filteredRecipes.map((recipe) => (
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
