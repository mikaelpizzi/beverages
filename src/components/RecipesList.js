import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";
import PropTypes from 'prop-types';

const RecipesList = () => {

    // Extract recipes
    const { recipes } = useContext(RecipesContext);

    return (  
        <div className="row mt-5">
            { recipes.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div>
    );
}

RecipesList.propTypes = {
    recipes: PropTypes.array
}
 
export default RecipesList;