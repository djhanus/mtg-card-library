import React, { useState } from 'react';

const DateFilter = ({ onDateFilter, loading, currentFilter }) => {
  const [selectedYear, setSelectedYear] = useState(currentFilter || 'all');

  const handleYearChange = (yearValue) => {
    setSelectedYear(yearValue);
    onDateFilter(yearValue);
  };

  const getYearRanges = () => {
    return [
      { label: 'All Eras', value: 'all' },
      { label: 'Modern Era (2020s)', value: '2020s' },
      { label: '2010s', value: '2010s' },
      { label: '2000s', value: '2000s' },
      { label: 'Classic (1990s)', value: '1990s' },
    ];
  };

  const specificYears = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1993; year--) {
    specificYears.push(year);
  }

  return (
    <div className="date-filter">
      <h4>Browse Cards by Era</h4>
      
      {/* Quick Era Buttons */}
      <div className="era-buttons">
        {getYearRanges().map(range => (
          <button 
            key={range.value}
            onClick={() => handleYearChange(range.value)}
            className={selectedYear === range.value ? 'active' : ''}
            disabled={loading}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* Specific Year Dropdown */}
      <div className="filter-section">
        <label htmlFor="specific-year">Or pick a specific year: </label>
        <select 
          id="specific-year"
          value={selectedYear}
          onChange={(e) => handleYearChange(e.target.value)}
          disabled={loading}
        >
          <option value="all">Select a year...</option>
          {specificYears.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {selectedYear !== 'all' && (
        <p className="current-filter">
          {loading ? 'Loading...' : `Browsing: ${
            selectedYear.includes('s') ? 
            getYearRanges().find(r => r.value === selectedYear)?.label :
            `${selectedYear} releases`
          }`}
        </p>
      )}
    </div>
  );
};

export default DateFilter;