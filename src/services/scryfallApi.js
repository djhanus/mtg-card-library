const BASE_URL = 'https://api.scryfall.com';

const headers = {
  'Accept': 'application/json',
  'User-Agent': 'MTGCardLibrary/1.0'
};

export const scryfallApi = {
  // Search for cards
  searchCards: async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/cards/search?q=${encodeURIComponent(query)}`, {
        headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error searching cards:', error);
      throw error;
    }
  },

  // Get a random card
  getRandomCard: async () => {
    try {
      const response = await fetch(`${BASE_URL}/cards/random`, { headers });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching random card:', error);
      throw error;
    }
  },

  // Get card by exact name
  getCardByName: async (name) => {
    try {
      const response = await fetch(`${BASE_URL}/cards/named?fuzzy=${encodeURIComponent(name)}`, {
        headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching card by name:', error);
      throw error;
    }
  }
};