import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/countryDetails.css';
import axios from 'axios';

function CountryDetails() {
	const { name } = useParams();
	const [country, setCountry] = useState(null);
	const [_languages, setLanguages] = useState([]);

	useEffect(() => {
		const fetchCountry = async () => {
			let languageArray = [];
			try {
				const res = await axios.get(
					`https://restcountries.com/v3.1/name/${name}?fullname=true`
				);
				if (res.data !== undefined) {
					if (name === 'China') {
						setCountry(res.data[2]);
						for (let language in res.data[2].languages) {
							languageArray.push(language);
						}
						setLanguages(languageArray);
					} else {
						setCountry(res.data[0]);
						for (let language in res.data[0].languages) {
							languageArray.push(res.data[0].languages[language]);
						}
						setLanguages(languageArray);
					}
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchCountry();
	}, [name]);

	if (!country) return <p>Loading...</p>;

	return (
		<div className='container'>
			<Link to={`/`}>
				<button>Return</button>
			</Link>
			<div className='countryDetails'>
				<h2>{country.name.common}</h2>
				<div>
					<p>Region: {country.region}</p>
					<p>Capital: {country.capital}</p>
				</div>
				<div>
					<p>Timezone: {country.timezones[0]}</p>
					<p>
						Currency: ({Object.values(Object.values(country.currencies)[0])[1]})
						{Object.values(Object.values(country.currencies)[0])[0]}
					</p>
				</div>
				<p>
					Languages:
					{_languages.map((language) => {
						return <span key={language}> {language},</span>;
					})}
				</p>
				<img src={country.flags.png} alt={`${country.name.common} flag`} />
			</div>
		</div>
	);
}

export default CountryDetails;
