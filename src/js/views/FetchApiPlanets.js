import React, { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import  SinglePlanets  from "../component/SinglePlanets";
 

export const FetchApiPlanets = (props) => {
  const API_PLANETS = "https://www.swapi.tech/api/planets/";
  const [infoPlanet, setInfoPlanet] = useState([])
  const [loadingPlanet, setLoadingPlanet] = useState(true)
  const theid = useParams();


  const getApiList = useCallback(async () => {
    await fetch(`${API_PLANETS}${theid.theid}`)
      .then(response => response.json())
      .then(data => setInfoPlanet(data.result.properties))
      .catch(error => console.error(error))
      .finally(() => setLoadingPlanet(false));
  }, [API_PLANETS, theid.theid] );



  useEffect(() => {
    getApiList();
  }, [getApiList]);

  if (loadingPlanet) return <h2>Loading</h2>

  return (
    <>
    <div className="container">
			<SinglePlanets starWars={props.starWars} planetImg={props.planetImg} info={infoPlanet} faHeart={props.faHeart}/>
		</div>

     

      
    </>
  )
};

FetchApiPlanets.propTypes = {
  match: PropTypes.object,
};