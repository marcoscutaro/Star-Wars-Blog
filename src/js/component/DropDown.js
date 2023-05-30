import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = (props) => {

  const { store, actions } = useContext(Context)
 
 
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FontAwesomeIcon className="favoritesHeart" icon={props.faHeart}/> {store.favorites.length}
        </button>


        <ul className="dropdown-menu textFavorites">
        {store.favorites === ""
				?
				<li className="text-white text-center">No favorites</li>
				:
					store.favorites.map((item, index) => {
						return(
							
                <li key={index} id={item.id}>{item.name}<button className="deleteBtn" onClick={() => actions.deleteFav(item.id)}><FontAwesomeIcon icon={props.faTrash}/></button></li>
					)})
				}
         </ul>
      </div>
    </>
  );
};

export default Dropdown;
