import './App.css';
import {useState} from "react";
import "./components/Country-cards.jsx";
import axios from "axios";
import Button from "./components/Button.jsx";
// import countryCards from "./components/Country-cards.jsx";


function App() {

    const [countries, setCountries] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // const [getCountries, setGetCountries] = useState('')
    const [error, setError] = useState(null)


    async function fenchdata() {

        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            const data = response.data;
            console.log(response.data);

            if (Array.isArray(data)) {
                const sorded = data.slice().sort((a, b) => {
                    return a.population - b.population;
                    setCountries(sorted);
                    setLoaded(true);
                   // setGetCountries('')
                } else {
                    error("Error, er gaat iets mis!!!");
                }
            } catch (error) {
                setError("Error, iets klopt niet!!!")
            console.log();
            }
    	}

		return (
			<>
				<section>
					<div>
						<header>
							<img src="src/assets/world_map.png" alt="wereld-kaart"/>
							<h1 className="h1">world regions</h1>
							<Button
								buttonType={"button"}
								name={"Get Api"}
								isDisabled = {false}
								action={fetchdata}
							/>
						</header>
					</div>
					<br/>
					{apiRequest &&
						<div className="continenten">
							<ul>
								<li>
									<img
										name={apiRequest.name}
										src={apiRequest.flags.png}
										alt={apiRequest.flags.alt}
									/>
									<p>Has a population of {apiRequest.population} peolpe</p>
								</li>
							</ul>
						</div>
					}
				</section>
			</>
		)
	}

	export default App





//     return (
//         <>
//             <div>
//                 <img className="world-map" src="src/assets/world_map.png" alt="world-map"/>
//                 <h1 className="h1">world regions</h1>
//                 {!loaded && (
//                     <Button />
//                 )}
//             </div>
//             <div className="sorted-container">
//                 {countries.map((Array))}
//             </div>
//
//         </>
//     )
// }
//
// export default App
