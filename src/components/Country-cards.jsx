const regionColorMap = {
	Africa: "region-Africa",
	Americas: "region-Americas",
	Asia: "region-Asia",
	Europe: "region-Europe",
	Oceania: "region-Oceania",
};

function CountyCard({name, flag, region, polulation}) {
	const regionClas = regionColorMap[region] || "";

	return (
		<div className="country-card">
			<h2 className={`country-name ${regionClas}`}>{name}</h2>
			<img className="county-flag" src={flag} alt={`flag of ${name}`}/>
			<p>Has a population of {}</p>
		</div>
	);
}

export default CountyCard;