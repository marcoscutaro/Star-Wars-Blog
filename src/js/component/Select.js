import React from "react";
import { Link } from "react-router-dom";


const Select = () => {
    return (
        <div className="selectSection">
            <div  className="selectImg">
                
                <Link className="cardsBtn" to="/TypesOfCharacters">
				    <button className="cardsTitle">Characters</button>
			    </Link>
			
			
			    <Link className="cardsBtn" to="/TypesOfPlanets">
				    <button className="cardsTitle">Planets</button>
			    </Link>
              
            </div>
        </div>
    )
};

export default Select;