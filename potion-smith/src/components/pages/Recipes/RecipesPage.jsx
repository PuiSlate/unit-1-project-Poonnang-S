import RecipeCard from "./RecipeCard";
import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RecipesPage = ({ recipes }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Read search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // Filtering recipes by search (name or category) and selectedCategory
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery) ||
        recipe.category.toLowerCase().includes(searchQuery);

      const matchesCategory =
        selectedCategory === "" || recipe.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchQuery, selectedCategory]);

  return (
    <main className="recipes-page">
      <h1>All Recipes</h1>
      <p>Welcome, brave adventurer, to the Potion Smith’s recipe compendium! Here you’ll find enchanted cocktails, 
      mystical mocktails, and legendary elixirs worthy of any dungeon master’s table. Mix your ingredients wisely,
    roll for flavor, and don’t forget to save your favorites before they vanish like a disappearing spell!</p>
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
