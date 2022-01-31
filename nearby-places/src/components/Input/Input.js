import React from 'react';
import './styles.css';

/**
 * @function Input
 * This is a text input field and submit button. It expects the currently selected location to be displayed in a heading
 * and an onClick handler for the submit button. 
 */

 const Input = ({place, getSearchQuery}) => {

    return (
        <div>
            <h4> What would you like to do in </h4>
            <h2 className="location-selected">{place}?</h2>
            <input id ="search-input" type="text/plain" name="search-input"></input>
            <input className = "submit-btn" type="submit" onClick={getSearchQuery}></input>
        </div>
    )
 }

 export default Input;