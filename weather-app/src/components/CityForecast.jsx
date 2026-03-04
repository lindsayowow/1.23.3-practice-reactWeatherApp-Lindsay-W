// Component to display the forecast for the selected city.
// “selectedCity changed → useEffect should run → fetch mock data.”

import { useEffect, useRef } from "react";
import { weatherData } from "../data/weatherData";

function CityForecast(props) {

  // ref for scrolling to the details section
  const detailsRef = useRef(null);

  // button handler to scroll smoothly
  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {}, [props.selectedCity]);

  if (!props.selectedCity) {
    return <p>Please select a city to display the current weather forecast.</p>;
  }

  return (
    <div>
      <h2>{props.selectedCity}</h2>
      <h3>{weatherData[props.selectedCity].summary}</h3>

      <button onClick={scrollToDetails}>
        View Detailed Forecast
      </button>

      <p ref={detailsRef}>
        It will be {weatherData[props.selectedCity].details}
      </p>
    </div>
  );
}

export default CityForecast;