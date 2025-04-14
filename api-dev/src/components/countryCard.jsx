import React from 'react';
import './countryCards.css';

function CountryCard(props) {
	const country = props.country;

	return (
		<div className='countryCard'>
			<img src={country.flags.png} alt={country.name.common} className='countryFlag' />
			<h2 className='countryName'>{country.name.common}</h2>
			<p className='countryCapital'>Capital: {country.capital}</p>
			<p className='countryRegion'>Region: {country.region}</p>
		</div>
	);
}

export default CountryCard;
