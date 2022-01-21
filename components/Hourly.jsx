import React, { useState } from 'react';
import { capitalizeFirstLetter, isToday, getTime, getDate } from '../utils';

export default function Hourly({ response }) {
  const { hourly } = response;

  if (!hourly) {
    return null;
  }

  return (
    <div className='md:col-start-2 md:col-end-4 flex flex-col items-center card'>
      {/* <h2 className='text-2xl font-light mb-4'>Next 48 hours</h2>
      <div className='flex items-center gap-2'>
        <button onClick={handlePrevClick} className='h-8 w-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        {hourlyToShow.map((hour) => (
          <ul className='flex flex-col items-center card w-44' key={hour.dt}>
            <li className='text-lg'>
              {isToday(hourly[0].dt, hour.dt) ? (
                <>Today</>
              ) : (
                <>{getDate(hour.dt)}</>
              )}
            </li>
            <li>{getTime(hour.dt)}</li>
            <li className='text-2xl'>{hour.temp.toFixed()}°C </li>
            <li className='flex items-center '>
              {' '}
              <img
                className='inline pb-2 max-h-12'
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt={`${hour.weather[0].description} icon`}
              />
              <span>{capitalizeFirstLetter(hour.weather[0].description)}.</span>
            </li>
            <li>Feels like {hour.feels_like.toFixed()}°C </li>
            <li>{hour.humidity}% humidity.</li>
          </ul>
        ))}
        <button onClick={handleNextClick} className='h-8 w-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
