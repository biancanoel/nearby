// Importing React
import React from 'react';
// Icons
 import { BsFillArrowRightSquareFill } from "react-icons/bs";
 import { BsFillArrowLeftSquareFill } from "react-icons/bs";
// importing the CSS file.
import './styles.css';

/**
 * @function Slider
 */
const Slider = ({changePlace}) => {

  // // UseState with a default value of 0.
  // const [place, setPlace] = useState(0);

  return (

  <div className="container">
    <div>
      <span className ="nav-arrows left" type="button" onClick={changePlace}><BsFillArrowLeftSquareFill /></span>
      <span className ="nav-arrows right" type="button" onClick={changePlace}><BsFillArrowRightSquareFill /></span>
    </div>
  </div>

  )
}

export default Slider