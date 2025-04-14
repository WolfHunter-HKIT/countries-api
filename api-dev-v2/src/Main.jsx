import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CountryDetails from './pages/countryDetails.jsx';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/country/:name', element: <CountryDetails /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

reportWebVitals();
