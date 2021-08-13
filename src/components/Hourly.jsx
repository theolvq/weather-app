import React, { useState } from 'react';

function Hourly({
  response,
  getTime,
  getDate,
  capitalizeFirstLetter,
  isToday,
}) {
  const { hourly } = response;

  const maxWidth = window.innerWidth < 1024 ? window.innerWidth : 1024;

  const [range, setRange] = useState({
    low: 0,
    high: Math.round(maxWidth / 400 - 1),
  });

  const handlePrevClick = (e) => {
    if (range.low > 0) {
      setRange({
        ...range,
        low: range.low - 1,
        high: range.high - 1,
      });
    }
  };

  const handleNextClick = (e) => {
    if (range.high < hourly.length - 1) {
      setRange({
        ...range,
        low: range.low + 1,
        high: range.high + 1,
      });
    }
  };

  if (!hourly) {
    return null;
  }

  const hourlyToShow = hourly.filter(
    (_, i) => i >= range.low && i <= range.high
  );

  return (
    <div className='md:col-start-2 md:col-end-4 text-white flex flex-col  items-center bg-grey bg-opacity-60  backdrop-filter backdrop-blur-lg p-4 shadow-md'>
      <h2 className='text-2xl font-light mb-4'>Next 48 hours</h2>
      <div className='flex items-center gap-2'>
        <button onClick={handlePrevClick} className='h-8 w-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        {hourlyToShow.map((hour) => (
          <ul
            className='flex flex-col items-center shadow-lg w-44 my-2 p-4 '
            key={hour.dt}>
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
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hourly;
