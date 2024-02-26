import React, { useState } from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("New York City");

  function updateLocation(location) {
    setLocation(location);
  }

  return (
    <>
      <h1 className="title">Reactive Weather</h1>
      <h4 className="subtitle">Up to the minute weather news</h4>
      <div className="app">
        <WeatherCard city={cities.find((el) => el.city === location)} />
        <Location
          data={cities.find((el) => el.city === location)}
          location={location}
          updateLocation={updateLocation}
        />
      </div>
    </>
  );
}

export default App;
