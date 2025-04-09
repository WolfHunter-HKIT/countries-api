import React, { useState, useEffect } from 'react';
import countryFetch from '../services/countryFetch';
import CountryCard from './countryCard';

const CountryFilters = ({ showAllCountries }) => {
  const [filter, setFilter] = useState('all');
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  // Fetches countries data when the component mounts
  useEffect(() => {
    countryFetch()
      .then((data) => {
        setCountries(data);
        const uniqueRegions = [...new Set(data.map((country) => country.region))];
        setRegions(['all', ...uniqueRegions]);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    showAllCountries(false);
  };

  return (
    <div>
      <div className="countryFilters">
        {regions.map((region) => (
          <button
            key={region}
            className="filterButton"
            value={region}
            onClick={handleFilterChange}
            style={{
              backgroundColor: filter === region ? '#ccc' : '#f0f0f0',
            }}
          >
            {region.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="countryCards">
        {countries
          .filter((country) => (filter === 'all' ? true : country.region === filter))
          .map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
      </div>
    </div>
  );
};

export default CountryFilters;