// components/WeatherCard.js
import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({
  cityName,
  temp,
  humidity,
  pressure,
  weatherDesc,
  weatherIcon,
}) => {
  // Determine temperature color based on the specifications
  const getTempColor = (temperature) => {
    if (temperature <= 5) return "temp-cold"; // Blue
    if (temperature <= 25) return "temp-moderate"; // Orange
    return "temp-hot"; // Red
  };

  const tempColorClass = getTempColor(temp);

  return (
    <div className='weather-card'>
      <h2 className='city-name'>{cityName}</h2>

      <div className='weather-icon'>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={weatherDesc}
        />
        <p className='weather-description'>{weatherDesc}</p>
      </div>

      <div className={`temperature ${tempColorClass}`}>
        <span className='value'>{Math.round(temp)}</span>
        <span className='unit'>°C</span>
      </div>

      <div className='details'>
        <div className='detail-item'>
          <span className='detail-label'>Humidity:</span>
          <span className='detail-value'>{humidity}%</span>
        </div>

        <div className='detail-item'>
          <span className='detail-label'>Pressure:</span>
          <span className='detail-value'>{pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
