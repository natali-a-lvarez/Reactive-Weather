import React from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <>
      <h1 className="title">Reactive Weather</h1>
      <h4 className="subtitle">Up to the minute weather news</h4>
      <div className="app">
        {cities.map((city) => (
          <WeatherCard city={city} />
        ))}
      </div>
    </>
  );
}

export default App;
