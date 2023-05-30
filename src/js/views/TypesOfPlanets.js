import React from 'react'
import Planets from "../component/Planets.js";



const TypesOfPlanets = (props) => {
    
    return (
   <> 
       
    <Planets 
    
    faHeart={props.faHeart} 
    
    planetImg={props.planetImg}
    
    />

    </>
    
    )
}

export default TypesOfPlanets;
