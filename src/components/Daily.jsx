import React from 'react';

function Daily({ response, getDate, getTime }) {
  if (!response.daily) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2>Daily weather for the next 8 days</h2>
      {response.daily &&
        response.daily.map(day => (
          <ul key={day.dt}>
            <li>{getDate(day.dt)}</li>
            <li>
              {day.weather[0].description}
              <img
                className='weather-icon'
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={`${day.weather[0].description} icon`}
              />
            </li>
            <li>Temperature {day.temp.day}</li>
            <li>Min Temp {day.temp.min}</li>
            <li>Max Temp {day.temp.max}</li>
            <li>Sunrise {getTime(day.sunrise)}</li>
            <li>Sunset {getTime(day.sunset)}</li>
          </ul>
        ))}
    </div>
  );
}

export default Daily;
