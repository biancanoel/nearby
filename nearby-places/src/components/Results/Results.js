import React from 'react';
import './styles.css';

const Results = ({results}) => {
    return (
        <div>
        
        {results.map((result) => (
            <div key={result.name} className="result-container">
                <div className="result-info-1">
                    <h3>{result.name}</h3>
                    <p>Address: {result.vicinity}</p>
                </div>
                <div className="result-info-2">
                    Rating: {result.rating}
                </div>
            </div>
        ))}

        </div>
    )
}

export default Results;