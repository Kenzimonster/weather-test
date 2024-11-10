import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [weather, setWeather] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWeather(response.data.weather[0].description);
    setWindSpeed(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=303bd99b033de7abd601b8f4312cc3b9&units=metric`;
  axios.get(url).then(handleResponse);
  if (props.city) {
    return (
      <div className="currentWeather">
        <div>
          <h2 className="currentCity">{props.city}</h2>
          <p className="currentWeatherDescription">
            <span>"{weather}"</span>
            <br />
            Humidity: <span className="currentHumidity">{humidity}</span>
            %, Wind: <span className="currentWindspeed">{windSpeed}</span> km/h
          </p>
        </div>
        <div className="currentTemp">
          <div>
            <img src={icon} alt={weather} className="currentTempIcon" />
          </div>
          <div className="currentTempValue">{Math.round(temperature)}</div>
          <div className="currentTempUnit">°C</div>
        </div>
      </div>
    );
  } else {
    return <p>Please enter a city.</p>;
  }
}
