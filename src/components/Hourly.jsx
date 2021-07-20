import React from 'react';

function Hourly({ response, getTime }) {
  if (!response.hourly) {
    return null;
  }
  return (
    <div>
      <h2>Hourly weather for the next 48 hours</h2>
      {response.hourly.map(hour => (
        <ul key={hour.dt}>
          <li>{getTime(hour.dt)}</li>
          <li>
            {hour.weather[0].description}
            <img
              className='weather-icon'
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt={`${hour.weather[0].description} icon`}
            />
          </li>
          <li>Temp {hour.temp} C</li>
          <li>Humidity {hour.humidity}% </li>
        </ul>
      ))}
    </div>
  );
}

export default Hourly;
