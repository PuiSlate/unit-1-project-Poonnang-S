import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
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

    // Recipe rating state
    const [userRating, setUserRating] = useState(recipe.rating || 0); 

    // Save favorite recipe state
    const [isFavorite, setIsFavorite] = useState(recipe.isFavorite || false);

     const toggleFavorite = () => {
     setIsFavorite(prev => !prev);
     };

    return (
        <main className="recipe-details-page">
            <button className="back-button" onClick={() => navigate("/recipes")}>. 
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

            {/* Add recipe rating section where users can rate out of 5 stars  */}
            <div className="recipe-rating">
              <h3>Rate this recipe:</h3>
                 <div className="stars">
                      {Array.from({ length: maxRating }, (_, i) => {
                        const starNumber = i + 1;
                      return (
                     <span
                         key={starNumber}
                         className={`star ${starNumber <= userRating ? "filled" : ""}`}
                         onClick={() => handleRating(starNumber)}
                     >
                     ★
                    </span>
            );
            })}

          </div>
          {userRating > 0 && <p>You rated this recipe {userRating} out of {maxRating} stars</p>}
          </div>

          <div className="favorite-section">
            <button
            className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
            onClick={toggleFavorite}
            >
            {isFavorite ? "❤️ Favorited" : "🤍 Save Recipe"}
           </button>
         </div>
   
        </main>
    );
};

export default RecipeDetailsPage;