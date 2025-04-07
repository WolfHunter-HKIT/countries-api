import './App.css';
import CountryFetch from './services/countryFetch.js';
import { useEffect, useRef } from 'react';
import axios from 'axios';

function App() {
	// Call once upon loading the page to fetch all countries.
	useEffect(() => {
		console.log(CountryFetch());
	}, []);

	return <div className='App'></div>;
}

export default App;
