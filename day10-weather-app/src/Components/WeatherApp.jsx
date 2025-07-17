import React, { useState } from 'react';
import './WeatherApp.css';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <div className="weather-box">
        <h1 className="app-title">WEATHER APP</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Check</button>
        </div>
        {error && <p className="error">{error}</p>}
        {weather && (
          <div className="weather-details">
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
