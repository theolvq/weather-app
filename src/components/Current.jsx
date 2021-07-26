import React from 'react';

function Current({ geoCodes, response, getTime, capitalizeFirstLetter }) {
  if (!response.current) {
    return <div>loading...</div>;
  }

  return (
    <div className='w-2/12'>
      <h1 className='font-bold text-2xl'>
        {geoCodes.name}, {geoCodes.country}
      </h1>
      <ul>
        <li className='font-light text-6xl '>
          {response.current.temp.toFixed()}°C
        </li>
        <li>
          <img
            className='inline pb-2'
            src={`http://openweathermap.org/img/wn/${response.current.weather[0].icon}.png`}
            alt={`${response.current.weather[0].description} icon`}
          />
          {capitalizeFirstLetter(response.current.weather[0].description)}
        </li>
        <li>Feels like {response.current.feels_like.toFixed()} °C</li>
        <li>Humidity {response.current.humidity} %</li>
        <li>Sunrise at {getTime(response.current.sunrise)} </li>
        <li>Sunset at {getTime(response.current.sunset)} </li>
      </ul>
    </div>
  );
}

export default Current;
