// App.js
import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const CITIES = [
  {
    name: "Joinville",
    country: "BR",
    state: "SC",
    displayName: "Joinville / SC (Brazil)",
  },
  {
    name: "San Francisco",
    country: "US",
    state: "CA",
    displayName: "San Francisco / CA (USA)",
  },
  {
    name: "Urubici",
    country: "BR",
    state: "SC",
    displayName: "Urubici / SC (Brazil)",
  },
];

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const weatherPromises = CITIES.map((city) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.state},${city.country}&units=metric&appid=${API_KEY}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Failed to fetch weather for ${city.displayName}`
              );
            }
            return response.json();
          })
          .then((data) => ({
            ...data,
            displayName: city.displayName,
          }))
      );

      const results = await Promise.all(weatherPromises);
      setWeatherData(results);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message);
      console.error("Error fetching weather data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch weather data initially
    fetchWeatherData();

    // Set up interval to fetch data every 10 minutes (600000 ms)
    const intervalId = setInterval(fetchWeatherData, 600000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='app-container'>
      <header>
        <h1>Weather Dashboard</h1>
        {lastUpdated && (
          <p className='last-updated'>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}
      </header>

      <main>
        {loading && <div className='loading'>Loading weather data...</div>}

        {error && <div className='error'>Error: {error}</div>}

        {!loading && !error && (
          <div className='weather-cards'>
            {weatherData.map((data) => (
              <WeatherCard
                key={data.id}
                cityName={data.displayName}
                temp={data.main.temp}
                humidity={data.main.humidity}
                pressure={data.main.pressure}
                weatherDesc={data.weather[0].description}
                weatherIcon={data.weather[0].icon}
              />
            ))}
          </div>
        )}
      </main>

      <footer>
        <p>Data provided by OpenWeatherMap</p>
      </footer>
    </div>
  );
};

export default App;
