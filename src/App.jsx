import './App.css';
import { useState } from "react";
import axios from "axios";
import Button from "./components/Button.jsx";

function App() {
	const [countries, setCountries] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(null);

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

	return (
		<>
			<section>
				<header>
					<img src="src/assets/world_map.png" alt="wereldkaart" />
					<h1 className="h1">World Regions</h1>
					{!loaded && (
						<Button
							buttonType="button"
							name="Get API"
							isDisabled={false}
							action={fetchData}
						/>
					)}
					{error && <p style={{ color: "red" }}>{error}</p>}
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