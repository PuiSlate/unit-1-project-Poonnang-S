import Spacer from "../../common/spacer"
import Card from "../../common/Card"

const RecipeCard = ({recipe}) => {
    return (
         <Card clickable={true}>
            <img
                className="recipe-card-image"
                src={recipe.getImageURL()}
                alt={`Image of ${recipe.name}`}
            />
        
            <div className="artwork-card-text">
                <h4>{artwork.title}</h4>
                <h5>{artwork.artist}</h5>
            </div>
            <Spacer marginY="10px" />
         </Card>   
    )
}