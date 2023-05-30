import React from "react";
import Characters from "../component/Characters";

const TypesOfCharacters = (props) => {
    return <Characters faHeart={props.faHeart} characters_img={props.characters_img}/>
}

export default TypesOfCharacters;