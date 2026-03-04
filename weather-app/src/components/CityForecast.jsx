// Component to display the forecast for the selected city. 
// “selectedCity changed → useEffect should run → fetch mock data.

import { useEffect } from "react";
import { weatherData } from "../data/weatherData";



function CityForecast(props) {
  
  useEffect(() => {}, [props.selectedCity]);

  if (!props.selectedCity) {
    return <p>Please select a city to display the current weather forecast.</p>;
  }

  return (
    <div>
      <h2>{props.selectedCity}</h2>
      <h3>{weatherData[props.selectedCity].summary}</h3>
      <p>It will be {weatherData[props.selectedCity].details}</p>
    </div>
  );
}

export default CityForecast;