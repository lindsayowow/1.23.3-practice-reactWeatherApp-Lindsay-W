//  Component to list cities and handle user selection. 
// Using buttons 
// - Render a list of button elements (one per city).
// - Call a callback function passed from App.jsx when a button is clicked.
// App manages state → CityList triggers state changes → CityForecast reacts to state changes.
//  “User clicked Tokyo → App, update your selectedCity state.”


function CityList(props) {

    return(
<div>
    {props.cities.map(city =>
        <button key={city} onClick={() => props.onSelectCity(city)}>{city}</button>
    )}
</div>
    );

}

export default CityList;