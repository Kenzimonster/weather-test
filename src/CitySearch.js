import React, { useState } from "react";
import "./CitySearch.css";
import CurrentWeather from "./CurrentWeather";

export default function CitySearch() {
  let [city, setCity] = useState(null);
  let [displayWeather, setDisplayWeather] = useState("Please enter a city");
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      return setDisplayWeather(<CurrentWeather city={city} />);
    } else {
      alert(`please enter a city`);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="searchBar">
          <input
            type="search"
            placeholder="pick a city"
            onChange={updateCity}
            className="searcInput"
          />
          <input type="submit" value="Search" className="searchButton" />
        </div>
      </form>
      <hr />
      <div>{displayWeather}</div>
    </div>
  );
}
