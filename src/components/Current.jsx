import React from 'react';

function Current({ geoCodes, response, getTime }) {
  if (!response.current) {
    return <div>loading...</div>;
  }
  return (
    <>
      <h2>Current Weather in {geoCodes.name}</h2>
      <ul>
        <li>Temperature now {response.current.temp} °C</li>
        <li>Feels like {response.current.feels_like} °C</li>
        <li>Humidity {response.current.humidity} %</li>
        <li>
          Weather for today {response.current.weather[0].description}
          <img
            className='weather-icon'
            src={`http://openweathermap.org/img/wn/${response.current.weather[0].icon}.png`}
            alt={`${response.current.weather[0].description} icon`}
          />
        </li>
        <li>Sunrise at {getTime(response.current.sunrise)} </li>
        <li>Sunset at {getTime(response.current.sunset)} </li>
      </ul>
    </>
  );
}

export default Current;
