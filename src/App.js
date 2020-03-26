import React from 'react';
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherApp from './components/WeatherApp'

function App() {
  return (
    <div className="App">
        <WeatherApp defaultLocation='39.7456,-97.0892' />
    </div>
  );
}

export default App;
