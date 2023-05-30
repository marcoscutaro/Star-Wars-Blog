import React from "react";
import { Carousel } from "../component/Carousel";
import Select from "../component/Select";



export const Home = (props) => {

	return (
		<div className="text-center mt-5">
			<Carousel  fondo5={props.fondo5} fondo3={props.fondo3} fondo2={props.fondo2} fondo1={props.fondo1}/>
			<Select/>
		</div>
	)
}