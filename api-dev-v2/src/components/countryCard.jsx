import React from 'react';
import '../styles/countryCards.css';
import { Link } from 'react-router-dom';

function CountryCard(props) {
	const country = props.country;

	return (
		<Link to={`/country/${country.name.common}?fulltext=true`}>
			<div className='countryCard'>
				<img src={country.flags.png} alt={country.name.common} className='countryFlag' />
				<h2 className='countryName'>{country.name.common}</h2>
				<p className='countryCapital'>Capital: {country.capital}</p>
				<p className='countryRegion'>Region: {country.region}</p>
			</div>
		</Link>
	);
}

export default CountryCard;
