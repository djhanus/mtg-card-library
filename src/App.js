import React from 'react';
import CardSearch from './components/CardSearch';
import CardDisplay from './components/CardDisplay';
import DateFilter from './components/DateFilter';
import { useCards } from './hooks/useCards';
import './App.css';

function App() {
  const { 
    cards, 
    loading, 
    error, 
    currentFilter,
    searchCards, 
    getRandomCard, 
    clearCards, 
    loadCardsByDate 
  } = useCards();

  return (
    <div className="App">
      <header className="App-header">
        <h1>MTG Card Library</h1>
        <p>Search Magic: The Gathering cards or browse by era</p>
      </header>
      
      <main>
        <DateFilter 
          onDateFilter={loadCardsByDate}
          loading={loading}
          currentFilter={currentFilter}
        />

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
        
        {cards.length > 0 && (
          <div className="results-info">
            <p>
              {currentFilter === 'search' && 'Search results: '}
              {currentFilter === 'random' && 'Random card: '}
              {currentFilter !== 'search' && currentFilter !== 'random' && currentFilter !== 'all' && 'Era results: '}
              {cards.length} card{cards.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
        
        <div className="cards-grid">
          {cards.map(card => (
            <CardDisplay key={card.id} card={card} />
          ))}
        </div>
        
        {cards.length === 0 && !loading && !error && (
          <p>Pick an era above, search for specific cards, or get a random card to get started!</p>
        )}
      </main>
    </div>
  );
}

export default App;