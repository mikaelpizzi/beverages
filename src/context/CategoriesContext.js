import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create context
export const CategoriesContext = createContext();

// Provider
const CategoriesProvider = (props) => {
    // Create context's state
    const [ categories, saveCategories ] = useState([]);

    // Execute API call
    useEffect(() => {
        const obtainCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await axios.get(url);

            saveCategories(categories.data.drinks);
        }
        obtainCategories();

    }, [])



    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;