import React from 'react';

function Current({ geoCodes, response, getTime, capitalizeFirstLetter }) {
  if (!response.current) {
    return <div>loading...</div>;
  }

  return (
    <div className='min-w-max'>
      <h1 className='font-bold text-2xl'>
        {geoCodes.name}, {geoCodes.country}
      </h1>
      <ul>
        <li className='text-3xl '>
          <img
            className='inline pb-2'
            src={`http://openweathermap.org/img/wn/${response.current.weather[0].icon}.png`}
            alt={`${response.current.weather[0].description} icon`}
          />{' '}
          {response.current.temp.toFixed()} °C
        </li>
        <li>
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
