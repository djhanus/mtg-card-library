import { useState } from 'react';
import { scryfallApi } from '../services/scryfallApi';

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');

  const searchCards = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    setCurrentFilter('search');
    
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

  const loadCardsByDate = async (yearFilter) => {
    setLoading(true);
    setError(null);
    setCurrentFilter(yearFilter);
    
    try {
      const results = await scryfallApi.getCardsByYear(yearFilter);
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
    setCurrentFilter('random');
    
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
    setCurrentFilter('all');
  };

  return {
    cards,
    loading,
    error,
    currentFilter,
    searchCards,
    getRandomCard,
    clearCards,
    loadCardsByDate
  };
};