const RecipeDetailsPage = () => {
     const recipe = mockRecipes.find(r => r.id === parseInt(id));

    if (!recipe) return <p>Recipe not found</p>;
    return (
         <main>
            <h1>{recipe.name}</h1>
            <img src={recipe.imageID} alt={recipe.name} />
            <h2>Category: {recipe.category}</h2>

            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
            </ul>

            <h3>Instructions</h3>
            <ol>
                {recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)}
            </ol>
        </main>
    );
    
}

export default RecipeDetailsPage;