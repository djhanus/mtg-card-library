import React, { useState } from 'react';

const CardSearch = ({ onSearch, onRandomCard, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="card-search">
      <h4>Browse Cards by Era</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search MTG cards... (e.g., 'Lightning Bolt', 'red creatures', 'cmc=3')"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !searchTerm.trim()}>
          Search
        </button>
      </form>
      
      <button onClick={onRandomCard} disabled={loading}>
        Random Card
      </button>
      
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default CardSearch;