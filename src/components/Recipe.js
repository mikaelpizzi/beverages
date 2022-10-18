import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ recipe }) => {

    // Material-ui modal config
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Extract ModalContext values
    const { recipeInfo, saveRecipeId, saveRecipe } = useContext(ModalContext);

    // Show and format the ingredients
    const showIngredients = info => {
        let ingredients = [];

        for (let i = 1; i <= 15; i++) {
            if ( info[`strIngredient${i}`] ) {
                ingredients.push(
                    <li>{ info[`strIngredient${i}`] } - { (info[`strMeasure${i}`]) ? info[`strMeasure${i}`] : "to taste" }</li>
                )
            }            
        }

        return ingredients;
    }

    return (  
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>

                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Image of ${recipe.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveRecipeId(recipe.idDrink);
                            handleOpen();
                        }}
                    >See Recipe</button>

                    <Modal
                        key={recipeInfo.idDrink}
                        open={open}
                        onClose={() => {
                            saveRecipeId(null);
                            saveRecipe({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeInfo.strDrink}</h2>
                            <h3 className="mt-4">Instructions:</h3>
                            <p>
                                {recipeInfo.strInstructions}
                            </p>

                            <img className="img-fluid my-4" src={recipeInfo.strDrinkThumb} />

                            <h3>Ingredients and amounts:</h3>
                            <ul>
                                { showIngredients(recipeInfo) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}
 
export default Recipe;