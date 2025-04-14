import axios from 'axios';

const CountryFetch = async () => {
	try {
		const res = await axios.get('https://restcountries.com/v3.1/all');
		if (res.data !== undefined) {
			return res.data;
		}
	} catch (err) {
		console.log(err);
	}
};

export default CountryFetch;
