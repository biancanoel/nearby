import React from 'react';
import './styles.css';

/**
 * @function Input
 */

 const Input = ({place, getSearchQuery}) => {

    return (
        <div>
            <h2> What would you like to do in {place}?</h2>
            <input id ="search-input" type="text/plain" name="search-input"></input>
            <input className = "submit-btn" type="submit" onClick={getSearchQuery}></input>
        </div>
    )
 }

 export default Input;