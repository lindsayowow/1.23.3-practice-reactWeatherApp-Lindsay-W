//  Main component that manages the selected city and displays the 
// CityList and CityForecast components. 

// App manages state → CityList triggers state changes → CityForecast reacts to state changes.
// - App: “selectedCity just changed → pass it down to CityForecast.”

import { useState } from 'react';
import CityList from './components/CityList';
import './App.css';

const cities = ["NewYork", "London", "Tokyo"]

function App() {

  const [city, setCity] = useState({
        city: "",
        weather: ""
    });

  return (
    <>
    </>
  )
}

export default App
