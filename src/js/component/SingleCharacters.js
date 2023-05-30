import React from 'react'

export const SingleCharacters = (props) => {
  return (
    <div className="container">
    <div className="container d-flex justify-content-center m-5">
        <div className="card mb-3 rounded-0 bg-dark" style={{maxWidth: "740px"}}>
            <div className="row g-0">
                <div className="col-md-12 figureContaine">
                    <figure className="imgContainer">
                        <img src={props.starWars} alt="Imagen no encontrada"/>
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
    <div className="container d-flex justify-content-center flex-column m-3">
        <ul className="list-unstyled row text-danger text-center text">
            <li className="col"><p><b>Name</b></p><p>{props.info.name}</p></li>
            <li className="col"><p><b>Birth Year</b></p><p>{props.info.birth_year}</p></li>
            <li className="col"><p><b>Gender</b></p><p>{props.info.gender}</p></li>
            <li className="col"><p><b>Height</b></p><p>{props.info.height}</p></li>
            <li className="col"><p><b>Skin Color</b></p><p>{props.info.skin_color}</p></li>
            <li className="col"><p><b>Eye Color</b></p><p>{props.info.eye_color}</p></li>
        </ul>
    </div>
</div>
);
};