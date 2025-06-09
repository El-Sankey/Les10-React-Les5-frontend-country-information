
function sortCountriesByPopulation (countries) {
	return countries.toSorted((a, b) => {
		const {population} = b;
		return a["population"] - population
	})
}
export default sortCountriesByPopulation;

