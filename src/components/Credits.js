import React from 'react';

const Credits = () => {
return (
    <div className="credits">
        <div className="credits-content">
            <p>
                <span role="img" aria-label="React logo" style={{fontSize: '1.2em', verticalAlign: 'middle', marginRight: '0.3em'}}>⚛️</span>
                
                A React-based web app{' '}
                <a 
                    href="https://github.com/djhanus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="credit-link"
                >
                    djhanus
                </a>
            </p>
            <p>
                <span role="img" aria-label="Playing cards" style={{fontSize: '1.2em', verticalAlign: 'middle', marginRight: '0.3em'}}>🃏</span>
                
                Card data via{' '}
                <a 
                    href="https://scryfall.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="credit-link"
                >
                    Scryfall API
                </a>
            </p>
            <p>
                <span role="img" aria-label="Crystal ball" style={{fontSize: '1.2em', verticalAlign: 'middle', marginRight: '0.3em'}}>🔮</span>

                Magic: The Gathering is © Wizards of the Coast
            </p>

        </div>
    </div>
);
};

export default Credits;