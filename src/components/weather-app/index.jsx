import React, { useState } from "react";
import Search from "./Search";
import "./styles.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchWeatherData(search) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ce188c4d6ba77ca248c75d69e3f1cafd`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data);
      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (error) {
      console.log("error", error.message);
      setLoading(false);
    }
  }
  const handleSearch = (val) => {
    console.log("val", val);
    if (val !== "") {
      fetchWeatherData(val);
    }
  };
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div>
      <Search handleSearch={handleSearch} />
      {loading ? (
        <div>Loading Please wait.</div>
      ) : weatherData ? (
        <div className="weather-container">
          <div>
            <h2>
              {weatherData?.name} <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">
            <span className="bold">Temperature :</span>
            <span> {weatherData?.main?.temp}</span>
          </div>
          <p className="description">
            <span className="bold">Description :</span>
            {weatherData?.weather?.[0]?.description}
          </p>
          <div className="weather-info">
            <div>
              <p>
                <span className="bold">Speed :</span> {weatherData?.wind?.speed}
              </p>
              <p>
                <span className="bold">Humidity :</span>{" "}
                {weatherData?.main?.humidity}%
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
