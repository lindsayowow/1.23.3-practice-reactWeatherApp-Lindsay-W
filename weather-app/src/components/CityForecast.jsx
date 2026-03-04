// Component to display the forecast for the selected city. 

// - CityForecast: “selectedCity changed → useEffect should run → fetch mock data.


import CityList from "./CityList";


function CityForecast(props) {

  if (!props.selectedCity) {
    return null;
  }

  return (
    <div>
      <h2>{props.selectedCity}</h2>
    </div>
  );
}

export default CityForecast;