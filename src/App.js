import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./js/component/NavBar.js";
import ScrollToTop from "./js/component/ScrollToTop";
import injectContext from "./js/store/appContext";
import { Home } from "./js/views/Home";
import Footer from "./js/component/Footer";

/*BOOTSTRAP-------------------*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/*CHARACTERS-------------------*/
import TypesOfCharacters from "./js/views/TypesOfCharacters";
import { FetchApiCharacters } from "./js/views/FetchApiCharacters";

/*PLANETS-------------------*/
import TypesOfPlanets from "./js/views/TypesOfPlanets";
import { FetchApiPlanets } from "./js/views/FetchApiPlanets";

/*ICONS-------------------*/
import { faHeart, faTrash, faBars } from "@fortawesome/free-solid-svg-icons";

/*IMAGENES-------------------*/
import starWars from "./img/starWars.png";

import characters_img from "./img/characters_img.jpg";
import fondo1 from "./img/fondo1.jpg";
import fondo2 from "./img/fondo2.jpg";
import fondo3 from "./img/fondo3.jpg";
import fondo5 from "./img/fondo5.png";
import planetImg from "./img/planetImg.png";
import bb8 from "./img/bb8.png";
/*CODE-------------------*/

function App() {
  const basename = process.env.BASENAME || "";
  return (
    <>
      <div className="starwars_bg">
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <NavBar
              brand="starwars"
              faBars={faBars}
              starWars={starWars}
              faHeart={faHeart}
              faTrash={faTrash}
            ></NavBar>

            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    bb8={bb8}
                    fondo5={fondo5}
                    fondo3={fondo3}
                    fondo2={fondo2}
                    fondo1={fondo1}
                    faHeart={faHeart}
                    starWars={starWars}
                    planetImg={planetImg}
                    characters_img={characters_img}
                  />
                }
              />

              <Route
                path="/TypesOfPlanets"
                element={
                  <TypesOfPlanets planetImg={planetImg} faHeart={faHeart} />
                }
              />

              <Route
                path="/FetchApiPlanets/:theid"
                element={
                  <FetchApiPlanets starWars={starWars} planetImg={planetImg} />
                }
              />

              <Route
                path="/FetchApiCharacters/:theid"
                element={
                  <FetchApiCharacters
                    starWars={starWars}
                    characters_img={characters_img}
                    planetImg={planetImg}
                  />
                }
              />

              <Route
                path="/TypesOfCharacters"
                element={
                  <TypesOfCharacters
                    starWars={starWars}
                    faHeart={faHeart}
                    characters_img={characters_img}
                    planetImg={planetImg}
                  />
                }
              />

              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>

            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </>
  );
}

export default injectContext(App);
