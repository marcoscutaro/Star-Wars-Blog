import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const SinglePlanets = (props) => {
  return (
   <>
      <div className="container">
            <div className="container d-flex justify-content-center">
                <div className="card mb-3 rounded-0 bg-dark" style={{maxWidth: "740px"}}>
                    <div className="row g-0 ">
                        <div className="col-md-12 figureContainer">
                            <figure className="imgContainer">
                                <img src={props.planetImg} alt="Imagen no encontrada"/>
                            </figure>
                        </div>
                        <div className="col-md-12 p-4">
                        <div className="card-body">
                            <h1 className="card-title textName">{props.info.name}</h1>
                            <p className="card-text text textParagraph">Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <hr/>
            <div className="container d-flex justify-content-center flex-column">
                <ul className="list-unstyled row text-danger text-center text liContainer">
                    <li className="col"><p><b>Name</b></p><p>{props.info.name}</p></li>
                    <li className="col"><p><b>Climate</b></p><p>{props.info.climate}</p></li>
                    <li className="col"><p><b>Diameter</b></p><p>{props.info.diameter}</p></li>
                    <li className="col"><p><b>Population</b></p><p>{props.info.population}</p></li>
                    <li className="col"><p><b>Gravity</b></p><p>{props.info.gravity}</p></li>
                </ul>
            </div>
		</div>
   </>
  );
};

export default SinglePlanets;