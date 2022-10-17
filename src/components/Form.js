const Form = () => {
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
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                    >
                    <option value="">-- Select Category --</option>
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