import React, { useState, useEffect } from 'react';
import CountryFetch from '../services/countryFetch';
import CountryCard from './countryCard';
import classNames from 'classnames';

const CountryFilters = ({ showAllCountries }) => {
	const [filter, setFilter] = useState('all');
	const [countries, setCountries] = useState([]);
	const [regions, setRegions] = useState([]);
	const [search, setSearch] = useState('');

	// Fetches countries data when the component mounts
	useEffect(() => {
		CountryFetch()
			.then((data) => {
				setCountries(data);
				const uniqueRegions = [...new Set(data.map((country) => country.region))];
				setRegions(['all', ...uniqueRegions]);
			})
			.catch((error) => console.error(error));
	}, []);

	// Handles region filters on click
	const handleFilterChange = (e) => {
		setFilter(e.target.value);
		showAllCountries(false);
	};

	// Handles specific searches on change
	const handleSearchChange = async (e) => {
		setSearch(e.target.value);
		if (e.target.value.length > 2) {
			showAllCountries(false);
		}
	};

	return (
		<div>
			<div className='countryFilters'>
				<div>
					{regions.map((region) => (
						<button
							key={region}
							className={classNames('filterButton', {
								activeFilter: filter === region,
							})}
							value={region}
							onClick={handleFilterChange}
						>
							{region.toUpperCase()}
						</button>
					))}
				</div>
				<input
					type='text'
					name='searchBar'
					id='searchBar'
					onChange={handleSearchChange}
					value={search}
					placeholder='Search here'
				/>
			</div>
			<div className='countryCards'>
				{countries
					.filter((country) => (filter === 'all' ? true : country.region === filter))
					.filter((country) =>
						search.length < 3
							? true
							: country.name.common.toLowerCase().includes(search.toLowerCase())
					)
					.map((country) => (
						<CountryCard key={country.name.common} country={country} />
					))}
			</div>
		</div>
	);
};

export default CountryFilters;
