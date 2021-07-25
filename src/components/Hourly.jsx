import React, { useState } from 'react';

function Hourly({ response, getTime, getDate, capitalizeFirstLetter }) {
  const { hourly } = response;

  const [range, setRange] = useState({ low: 0, high: window.innerWidth / 175 });
  console.log(window.innerWidth / 200);

  const handleClick = (e) => {
    console.log(e.target);
    const { id } = e.target;
    if (id === 'previous' && range.low > 0) {
      setRange({
        ...range,
        low: range.low - 1,
        high: range.high - 1,
      });
    }
    if (id === 'next' && range.high < hourly.length - 1) {
      setRange({
        ...range,
        low: range.low + 1,
        high: range.high + 1,
      });
    }
  };

  const isNextDay = (currentDayInSeconds, dateInSeconds) =>
    new Date(dateInSeconds * 1000).getDay() !==
    new Date(currentDayInSeconds * 1000).getDay();

  if (!hourly) {
    return null;
  }

  const hourlyToShow = hourly.filter(
    (_, i) => i >= range.low && i <= range.high
  );

  return (
    <div className='flex flex-col '>
      <h2 className='text-2xl font-thin'>Next 48 hours</h2>
      <div className='flex min-w-max gap-4 overflow-x-auto '>
        <button onClick={handleClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            id='previous'
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
          <ul className='font-light text-sm text-center' key={hour.dt}>
            {isNextDay(hourly[0].dt, hour.dt) ? (
              <>
                <li>{getDate(hour.dt)}</li>
                <li>{getTime(hour.dt)}</li>
              </>
            ) : (
              <>
                <li>Today</li>
                <li>{getTime(hour.dt)}</li>
              </>
            )}
            <li className='text-2xl'>
              {hour.temp.toFixed()}°C{' '}
              <img
                className='inline pb-2 max-h-12'
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt={`${hour.weather[0].description} icon`}
              />
            </li>
            <li>{capitalizeFirstLetter(hour.weather[0].description)}.</li>
            <li>{hour.humidity}% humidity.</li>
          </ul>
        ))}
        <button onClick={handleClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            id='next'
          >
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
