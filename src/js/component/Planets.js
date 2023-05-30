import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets = (props) => {
  
    const { store, actions } = useContext(Context);
    const planetsData = store.planets.map((item, index) => {
    const theid = item.id;  
  
  return (
   
   
   <div key = {index} className="card card-style bg-dark text-white shadow-lg rounded  ">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${item.id}.jpg`}  className="card-img-top" alt="..." />
        <div className="card-body ">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text"></p>
        </div>

        <div className="btnCotainer ">
        <Link to={`/FetchApiPlanets/${theid}`}>
            <button className="btn btn-warning ">Investigate Planet</button>
        </Link>
            <button onClick={() => actions.addFavoritesPlanet(theid)} className="favoritesBtn btn btn-outline-warning"><FontAwesomeIcon className="faHeart" icon={props.faHeart} /></button>

            </div>

   </div>

        )
    })
    return (
        <div className="cardSection">
            {planetsData}
        </div>
    )
    
};

export default Planets;