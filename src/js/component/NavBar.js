import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

export const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark ">
        <div className="container">
          <Link className="img-container" to="/">
            <img src={props.starWars} alt="star wars logo" />
          </Link>

          <button
            className="navbar-toggler collapseBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            tor
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon className="favoritesHeart" icon={props.faBars} />
          </button>
          <Dropdown faTrash={props.faTrash} faHeart={props.faHeart} />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navCont navbar-nav me-auto mb-2 mb-lg-0 ul-cont">
              <li className="nav-item size">
                <Link className="btnNav" to="/TypesOfPlanets">
                  <button className="cardsTitle">Planets</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
