//  Component to list cities and handle user selection. 

// Using buttons means your CityList component will likely:
// - Render a list of button elements (one per city).
// - Call a callback function passed from App.jsx when a button is clicked.
// - Not worry about routing or navigation.
// This keeps the mental model clean:
// App manages state → CityList triggers state changes → CityForecast reacts to state changes.

// - CityList: “User clicked Tokyo → App, update your selectedCity state.”


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