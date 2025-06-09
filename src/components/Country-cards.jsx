import "./Country-cards.css"

function CountyCards({flag, name, region}) {
	const regionClas = `color-${region}`;

	let response;
	return (
		<div className="country-card">
			<h2 className={`country-name ${regionClas}`}>{name}</h2>
			<img className="county-flag" src={flag} alt={`flag of ${name}`}/>
			<p>Has a population of {response.data.population}</p>
		</div>
	);
}

export default CountyCards;