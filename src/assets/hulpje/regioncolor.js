const regionColors = {
	Europe: 'blue',
	Asia: 'red',
	Africa: 'green',
	Americas: 'orange',
	Oceania: 'purple',
};

const getRegionColor = (region) => regionColors[region] || 'gray';

export default getRegionColor;