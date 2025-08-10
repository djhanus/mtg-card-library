import React from 'react';
import CardSearch from './components/CardSearch';
import CardDisplay from './components/CardDisplay';
import { useCards } from './hooks/useCards';
import './App.css';

function App() {
  const { cards, loading, error, searchCards, getRandomCard, clearCards } = useCards();

  return (
    <div className="App">
      <header className="App-header">
        <h1>MTG Card Library</h1>
        <p>Search Magic: The Gathering cards using the Scryfall API</p>
      </header>
      
      <main>
        <CardSearch 
          onSearch={searchCards}
          onRandomCard={getRandomCard}
          loading={loading}
        />
        
        {error && (
          <div className="error">
            <p>Error: {error}</p>
            <button onClick={clearCards}>Clear</button>
          </div>
        )}
        
        <div className="cards-grid">
          {cards.map(card => (
            <CardDisplay key={card.id} card={card} />
          ))}
        </div>
        
        {cards.length === 0 && !loading && !error && (
          <p>Search for cards or get a random card to get started!</p>
        )}
      </main>
    </div>
  );
}

export default App;