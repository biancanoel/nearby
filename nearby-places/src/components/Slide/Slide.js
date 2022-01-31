import React from 'react';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import './styles.css';

/**
 * @function Slider
 * These are right and left navigation controls expecting on click function to be passed in.
 */
const Slider = ({changePlace}) => {

  return (

  <div className="arrows-container">
    <span className ="nav-arrows left" type="button" onClick={changePlace}><BsFillArrowLeftSquareFill /></span>
    <span className ="nav-arrows right" type="button" onClick={changePlace}><BsFillArrowRightSquareFill /></span>
  </div>

  )
}

export default Slider