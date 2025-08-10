const BASE_URL = 'https://api.scryfall.com';

const headers = {
  'Accept': 'application/json',
  'User-Agent': 'MTGCardLibrary/1.0'
};

export const scryfallApi = {
  // Search for cards (excluding lands)
  searchCards: async (query) => {
    try {
      // Add the land exclusion to the query
      const modifiedQuery = `(${query}) -t:land`;
      
      const response = await fetch(`${BASE_URL}/cards/search?q=${encodeURIComponent(modifiedQuery)}`, {
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

  // Get a random card (excluding lands)
  getRandomCard: async () => {
    try {
      const response = await fetch(`${BASE_URL}/cards/random`, { headers });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const card = await response.json();
      
      // Check if it's a land and get another if it is
      if (card.type_line && card.type_line.toLowerCase().includes('land')) {
        return await scryfallApi.getRandomCard(); // Recursively get another
      }
      
      return card;
    } catch (error) {
      console.error('Error fetching random card:', error);
      throw error;
    }
  },

  // Get card by exact name (keep original)
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
  },

  // Get cards by year range (excluding lands)
  getCardsByYear: async (yearFilter) => {
    try {
      let query = '';
      
      if (yearFilter.includes('s')) {
        // Handle decade ranges
        switch (yearFilter) {
          case '2020s':
            query = 'year>=2020 year<=2025';
            break;
          case '2010s':
            query = 'year>=2010 year<=2019';
            break;
          case '2000s':
            query = 'year>=2000 year<=2009';
            break;
          case '1990s':
            query = 'year>=1993 year<=1999';
            break;
          default:
            query = 'year>=1993';
        }
      } else if (yearFilter !== 'all') {
        // Handle specific year
        query = `year:${yearFilter}`;
      } else {
        // Get sample of all cards
        query = 'is:booster';
      }

      // Add land exclusion
      const modifiedQuery = `(${query}) -t:land`;

      const response = await fetch(`${BASE_URL}/cards/search?q=${encodeURIComponent(modifiedQuery)}&order=released&unique=prints`, {
        headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching cards by year:', error);
      throw error;
    }
  }
};