import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // Provider's state
    const [ recipeid, saveRecipeId ] = useState(null);
    const [ recipe, saveRecipe ] = useState({});

    // Once a beverage is selected by user, call API for show its details
    useEffect(() => {
        const getRecipe = async () => {
            if (!recipeid) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeid}`;

            const result = await axios.get(url);

            saveRecipe(result.data.drinks[0]);
        }
        getRecipe();
    }, [recipeid])

    
    return (  
        <ModalContext.Provider
            value={{
                saveRecipeId
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider   ;