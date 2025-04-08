import React, { useState, useEffect } from 'react';
import CountryCard from './components/countryCard';
import countryFetch from './services/countryFetch';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await countryFetch();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <div className="countryCards">
        {Array.isArray(countries) && countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;