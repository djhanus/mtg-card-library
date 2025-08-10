import React from 'react';

const Credits = () => {
  return (
    <div className="credits">
      <div className="credits-content">
        <p>
          Built by{' '}
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
          Card data provided by{' '}
          <a 
            href="https://scryfall.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="credit-link"
          >
            Scryfall API
          </a>
        </p>
        <p className="disclaimer">
          Magic: The Gathering is © Wizards of the Coast
        </p>
      </div>
    </div>
  );
};

export default Credits;