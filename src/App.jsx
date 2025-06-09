import './App.css';
import { useState } from "react";
import axios from "axios";
import Button from "./components/Button.jsx";
import worldMap from './assets/world_map.png';


function App() {
	const [countries, setCountries] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(null);
	const [countryName, setCountryName] = useState("");
	const [country, setCountry] = useState([]);

	async function fetchData() {

		try {
			const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,region,population");
			const data = response.data;
			console.log(response.data)

			if (Array.isArray(data)) {
				const sorted = data.slice().sort((a, b) => {
					return a.population - b.population;
				});
				setCountries(sorted);
				setLoaded(true);
			} else {
				setError("Er ging iets mis bij het laden van de data.");
			}
		} catch (err) {
			setError("Netwerkfout: landen konden niet geladen worden.");
			console.error(err);
		}
	}

	async function fetchOneCountry() {
		try {
			const response = await axios.get('https://restcountries.com/v3.1/all');
			const sorted = response.data.sort((a, b) => a.population - b.population);
			setCountry(sorted);
			console.log(sorted[0].name.common);
		} catch (err) {
			console.error('Fout bij ophalen landen:', err);
		}
	}

	return (
		<>
			<section>
				<header>
					<img src={worldMap} alt="wereldkaart" />
					<h1 className="h1">World Regions</h1>
					{!loaded && (
						<Button
							buttonType="button"
							name="Get API"
							isDisabled={false}
							action={fetchData}
						/>
					)}
					{error && <p style={{color: "red"}}>{error}</p>}
					<input
						type="text"
						value={countryName}
						onChange={(e) => {
						return setCountryName(e.target.value);
					}} placeholder="Zoek land..." onKeyDown={(e) => e.key === 'Enter' && fetchOneCountry()}
					/>
					<Button
						buttonType="button"
						name="getCountries"
						action={fetchOneCountry}
						label="Zoek"/>
				</header>

				{loaded && (
					<div className="continenten">
						<ul>
							{countries.map((country, index) => (
								<li key={index}>
									<img
										src={country.flags?.png}
										alt={country.flags?.alt || country.name?.common}
									/>
									<p>
										{country.name?.common} has a population of {country["population"].toLocaleString()} people
									</p>
								</li>
							))}
						</ul>
					</div>
				)}
			</section>
		</>
	);
}

export default App;
