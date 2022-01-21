import React from 'react';
import { capitalizeFirstLetter } from '../utils';

export default function Current({ geoCodes, response }) {
  const { current } = response;
  if (!current) {
    return null;
  }

  return (
    <div className='card flex flex-col items-center min-w-min'>
      <h2 className='text-2xl font-light mb-4'>Now</h2>
      <div className='mx-2 p-4 w-10/12'>
        <h1 className='font-bold text-xl text-center'>
          {geoCodes.name}, {geoCodes.country}
          {geoCodes.state && <>, {geoCodes.state}</>}
        </h1>
        <ul className='flex flex-col items-center gap-1'>
          <li className='font-normal text-6xl '>
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
          <li>Feels like {response.current.feels_like.toFixed()}°C</li>
          <li className='flex items-center'>
            {response.current.humidity}% humidity
          </li>
        </ul>
      </div>
    </div>
  );
}
