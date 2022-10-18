import { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => { 

    const [ search, saveSearch ] = useState({
        name: "",
        category: ""
    })

    const { categories } = useContext(CategoriesContext);

    // Function to reading content
    const obtainRecipeDate = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (  
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Search beverages by Category or Ingredients</legend>
            </fieldset>
            
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by Ingredient"
                        onChange={obtainRecipeDate}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={obtainRecipeDate}
                    >
                    <option value="">-- Select Category --</option>
                    { categories.map((category) => (
                        <option 
                            key={category.strCategory} 
                            value={category.strCategory}
                        >{category.strCategory}</option>
                    ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Beverage"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Form;