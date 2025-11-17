import Spacer from "../../common/spacer"
import Card from "../../common/Card"

const RecipeCard = ({ recipe }) => {
    return (
        <Card clickable={true}>
            <img
                className="recipe-card-image"
                src={recipe.imageID ? `/images/${recipe.imageID}` : "/images/fallback.jpg"}
                alt={`Image of ${recipe.name}`}
            />

            <div className="recipe-card-text">
                <h4>{recipe.name}</h4>
                <h5>{recipe.category}</h5>
            </div>

            <Spacer marginY="10px" />
        </Card>
    )
}

export default RecipeCard;