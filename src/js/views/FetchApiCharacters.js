import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { SingleCharacters } from "../component/SingleCharacters";

export const FetchApiCharacters = (props) => {

    const API_PEOPLE = "https://www.swapi.tech/api/people/";
    const [infoCharacter, setInfoCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const theid = useParams();
  
  
    const getData = useCallback(async () => {
      await fetch(`${API_PEOPLE}${theid.theid}`)
        .then(response => response.json())
        .then(data => setInfoCharacter(data.result.properties))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }, [API_PEOPLE, theid.theid] );
  
  
  
    useEffect(() => {
        getData();
    }, [getData]);

	if(loading){
		return (
			<div className="lds-circle"><div></div></div>
		)
	}

	return (
		<>

		<div>
			<SingleCharacters starWars={props.characters_img} info={infoCharacter}/>
		</div>

      	
	</>
	)
};

FetchApiCharacters.propTypes = {
  match: PropTypes.object,
};
