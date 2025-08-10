import { useState } from 'react';
import { scryfallApi } from '../services/scryfallApi';

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchCards = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const results = await scryfallApi.searchCards(query);
      setCards(results);
    } catch (err) {
      setError(err.message);
      setCards([]);
    } finally {
      setLoading(false);
    }
  };

  const getRandomCard = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const card = await scryfallApi.getRandomCard();
      setCards([card]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearCards = () => {
    setCards([]);
    setError(null);
  };

  return {
    cards,
    loading,
    error,
    searchCards,
    getRandomCard,
    clearCards
  };
};