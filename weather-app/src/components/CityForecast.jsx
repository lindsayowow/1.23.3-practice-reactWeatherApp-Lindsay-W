// Component to display the forecast for the selected city. 
// “selectedCity changed → useEffect should run → fetch mock data.


import { useEffect } from "react";
import CityList from "./CityList";


function CityForecast(props) {

  if (!props.selectedCity) {
    return null;
  }

  return (
    <div>
      <h2>{props.selectedCity}</h2>
      <p>Forecast loading...</p>
    </div>
  );
}

export default CityForecast;