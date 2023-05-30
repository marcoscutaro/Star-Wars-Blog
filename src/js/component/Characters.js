import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = (props) => {
  const { store, actions } = useContext(Context);

  const peopleData = store.characters.map((item, index) => {
    const theid = item.id;

    return (
      <div
        key={index}
        className="card card-style bg-dark text-white shadow-lg rounded"
        style={{ width: "24rem" }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`}
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text"></p>
        </div>
        <div className="btnCotainer">
          <Link to={`/FetchApiCharacters/${theid}`}>
            <button className="btn btn-warning">Learn more</button>
          </Link>
          <button
            onClick={() => actions.addFavoritesPlanet(theid)}
            className="favoritesBtn btn btn-outline-warning"
          >
            <FontAwesomeIcon className="faHeart" icon={props.faHeart} />
          </button>
        </div>
      </div>
    );
  });

  return <div className="cardSection">{peopleData}</div>;
};

export default Characters;
