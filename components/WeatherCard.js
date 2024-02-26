import React from "react";
import sunny from "../assets/Sunny.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import rainy from "../assets/Rainy.svg";

function WeatherCard({ city }) {
  function renderImage(forecast) {
    if (forecast === "Sunny") {
      return sunny;
    } else if (forecast === "Cloudy") {
      return cloudy;
    } else if (forecast === "Rainy") {
      return rainy;
    } else {
      return partlyCloudy;
    }
  }

  return (
    <div className="card">
      <h3 className="card-main-title">Your Location's Weather</h3>
      <div className="img-container">
        <img
          className="card-img-top"
          src={renderImage(city.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">
          The weather in {city.city} is {city.temperature}
        </h3>
        <h5 className="card-text">It is {city.forecast} out today.</h5>
      </div>
    </div>
  );
}

module.exports = WeatherCard;
