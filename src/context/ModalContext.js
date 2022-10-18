import axios from "axios";
import { createContext, useState } from "react";

// Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // Provider's state
    const [ recipeid, saveRecipeId ] = useState(null);
    
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