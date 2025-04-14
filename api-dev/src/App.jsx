import React, { useState, useEffect } from 'react';
import CountryCard from './components/countryCard';
import CountryFetch from './services/countryFetch';
import CountryFilters from './components/countryFilters';

function App() {
	const [showAllCountries, setShowAllCountries] = useState(true);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchCountries = async () => {
			const data = await CountryFetch();
			setCountries(data);
		};
		fetchCountries();
	}, []);

	return (
		<div className='App'>
			<CountryFilters showAllCountries={setShowAllCountries} />
			{showAllCountries && (
				<div className='countryCards'>
					{countries.map((country) => (
						<CountryCard key={country.name.common} country={country} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
