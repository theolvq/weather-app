import React from 'react';

function Daily({ response, getDate, getTime, capitalizeFirstLetter }) {
  if (!response.daily) {
    return <div>loading...</div>;
  }

  return (
    <div className='flex flex-col justify-center gap-2 items-center'>
      <h2>Daily weather for the next 8 days</h2>
      {response.daily &&
        response.daily.map((day) => (
          <ul
            className='shadow-md bg-grey bg-opacity-60 text-white p-4 w-9/12'
            key={day.dt}
          >
            <li>{getDate(day.dt)}</li>
            <div className='flex items-center'>
              <li>
                {capitalizeFirstLetter(day.weather[0].description)}
                <img
                  className='weather-icon'
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={`${day.weather[0].description} icon`}
                />
              </li>
              <li>{day.temp.day}°C</li>
              <li>
                <span>Min {day.temp.min}°C</span> -
                <span> Max {day.temp.max}°C</span>
              </li>
              <li>Sunrise {getTime(day.sunrise)}</li>
              <li>Sunset {getTime(day.sunset)}</li>
            </div>
          </ul>
        ))}
    </div>
  );
}

export default Daily;
