import './App.css';
import { useState } from 'react';
import Slide from './components/Slide/Slide.js';
import Input from './components/Input/Input.js';
import Results from './components/Results/Results.js';
import { places } from './data';


function App() {

  
  const [searchQuery, setSearchQuery ] = useState( '' );
  const [results, setResults ] = useState( [] );
  const [place, setPlace ] = useState( 0 );
  const changePlace = ( ev ) => {
    
    // Save the currently selected location
    if ( ev.currentTarget.hasAttribute( 'class', 'left' ) ) {
      place === 0 ? setPlace( 4 ): setPlace( place -1 )
    } else {
      place === 4 ? setPlace( 0 ): setPlace( place + 1 )
    }

    // Clear out any old results
    document.getElementById( 'search-input' ).value = "";
    setResults([]);
    setSearchQuery( '' );
    const resultEl = document.getElementsByClassName( 'result-info' );
    for ( let i = 0; i< resultEl.length; i++ ) {
      resultEl[i].classList.add( 'visibility-hidden' );
    }


  }


  const getSearchQuery = () => {
    // Save the search string
    let searchString = document.getElementById( 'search-input' ).value;
    setSearchQuery( searchString );

    // Ask google for some results
    const google = window.google,
      locationImage = document.getElementById( 'location-image' ),
      lat = parseFloat( locationImage.getAttribute( 'data-lat' ) ),
      long = parseFloat( locationImage.getAttribute( 'data-long' ) ),
      where = new google.maps.LatLng(lat, long ),
      map = new google.maps.Map( document.getElementById( 'map' ), {
      center: where,
      zoom: 15
    } );
    
    const request = {
      keyword: searchString,
      location: where,
      radius: '5000'
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch( request, ( results, status ) => {
      setResults( results )
      const resultEl = document.getElementsByClassName( 'result-info' );
      for ( let i = 0; i< resultEl.length; i++ ) {
        resultEl[i].classList.remove( 'visibility-hidden' );
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Where to next?
        </h1>
      </header>
      <div id="map"></div>
      <div className="location-select-container">
        <img id = "location-image" src={places[place].image} alt={places[place].name} data-lat={places[place].latitude} data-long={places[place].longitude}></img>
        <Slide changePlace={changePlace} />
        <Input place={places[place].name} location = {places[place].location} getSearchQuery={getSearchQuery} />
      </div>

      <p className="result-info visibility-hidden" >You searched for "{searchQuery}"</p>
      <p className="result-info visibility-hidden"> We found {results.length} {results.length === 1 ? 'result' : 'results'} </p>
      <div className= "search-results-container">
        <Results results={results} />
      </div>

    </div>
  );
}

export default App;