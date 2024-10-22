import Image from 'next/image';
import React from 'react';
import { getDate, getTime, capitalizeFirstLetter, isToday } from '../utils';

export default function Daily({ response }) {
  const { daily } = response;
  const placeholderArray = Array(8).fill(null);
  if (!daily) {
    return (
      <>
        {placeholderArray.map((_, i) => (
          <ul className='card flex flex-col items-center' key={i}>
            <li className='h-6 w-3/4 placeholder mb-7'></li>
            <div className='flex flex-col items-center gap-1 w-full'>
              <li className='placeholder h-4 w-11/12'></li>

              <li className='placeholder h-4 w-11/12'></li>
              <li className='placeholder h-4 w-11/12'></li>
              <li className='placeholder h-4 w-11/12'></li>
              <li className='placeholder h-4 w-11/12'></li>
            </div>
          </ul>
        ))}
      </>
    );
  }

  return (
    <>
      {daily.map((day) => (
        <ul className='card' key={day.dt}>
          <li>
            <h2>
              {isToday(daily[0].dt, day.dt) ? (
                <>Today</>
              ) : (
                <>{getDate(day.dt)}</>
              )}
            </h2>
          </li>
          <div className='flex flex-col items-center gap-2'>
            <li className='flex items-center'>
              <Image
                className='inline'
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={`${day.weather[0].description} icon`}
                width={50}
                height={50}
              />
              {capitalizeFirstLetter(day.weather[0].description)}
            </li>

            <li className='daily-list'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='svg-icon'
                viewBox='0 0 24 24'
              >
                <path d='M8.5 2c.827 0 1.5.673 1.5 1.5v7.525c0 1.569.514 2.287 1.411 3.05 1.01.858 1.589 2.106 1.589 3.425 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-1.319.579-2.567 1.59-3.425.896-.761 1.41-1.48 1.41-3.05v-7.525c0-.827.673-1.5 1.5-1.5zm0-2c-1.933 0-3.5 1.567-3.5 3.5v7.525c0 .587-.258 1.145-.705 1.525-1.403 1.192-2.295 2.965-2.295 4.95 0 3.59 2.909 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.985-.892-3.758-2.295-4.95-.447-.38-.705-.938-.705-1.525v-7.525c0-1.933-1.567-3.5-3.5-3.5zm2.107 14.718c-1.012-.89-1.607-1.734-1.607-3.22v-1.498h-1v1.498c0 1.484-.597 2.332-1.607 3.22-.794.698-1.393 1.642-1.393 2.782 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.14-.599-2.083-1.393-2.782zm3.393-8.718v2h8v-2h-8z' />
              </svg>{' '}
              {day.temp.min.toFixed()}°C{' '}
            </li>
            <li className='daily-list'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='svg-icon'
                viewBox='0 0 24 24'
              >
                <path d='M8.5 2c.827 0 1.5.673 1.5 1.5v7.525c0 1.569.514 2.287 1.411 3.05 1.01.858 1.589 2.106 1.589 3.425 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-1.319.579-2.567 1.59-3.425.896-.761 1.41-1.48 1.41-3.05v-7.525c0-.827.673-1.5 1.5-1.5zm0-2c-1.933 0-3.5 1.567-3.5 3.5v7.525c0 .587-.258 1.145-.705 1.525-1.403 1.192-2.295 2.965-2.295 4.95 0 3.59 2.909 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.985-.892-3.758-2.295-4.95-.447-.38-.705-.938-.705-1.525v-7.525c0-1.933-1.567-3.5-3.5-3.5zm2.107 14.718c-1.012-.89-1.607-1.734-1.607-3.22v-6.498h-1v6.498c0 1.484-.597 2.332-1.607 3.22-.794.698-1.393 1.642-1.393 2.782 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.14-.599-2.083-1.393-2.782zm11.393-8.718h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z' />
              </svg>{' '}
              {day.temp.max.toFixed()}°C
            </li>
            <li className='daily-list'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='svg-icon'
                viewBox='0 0 24 24'
              >
                <path d='M24 23h-24v-2h24v2zm-24-6v2h4.069c-.041-.328-.069-.661-.069-1s.028-.672.069-1h-4.069zm7.103-5.312l-2.881-2.881-1.415 1.414 2.881 2.881c.412-.529.886-1.003 1.415-1.414zm3.897-1.688h2v-5h3l-4-4-4 4h3v5zm8.931 7c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-7.931-5c-3.314 0-6 2.686-6 6 0 .341.035.674.09 1h11.82c.055-.326.09-.659.09-1 0-3.314-2.686-6-6-6zm7.778-3.193l-2.881 2.881c.528.411 1.003.886 1.414 1.414l2.881-2.881-1.414-1.414z' />
              </svg>{' '}
              {getTime(day.sunrise)}
            </li>
            <li className='daily-list'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='svg-icon'
                viewBox='0 0 24 24'
              >
                <path d='M24 23h-24v-2h24v2zm-24-6v2h4.069c-.041-.328-.069-.661-.069-1s.028-.672.069-1h-4.069zm7.103-5.312l-2.881-2.881-1.415 1.414 2.881 2.881c.412-.529.886-1.003 1.415-1.414zm5.897-10.688h-2v5h-3l4 4 4-4h-3v-5zm6.931 16c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-7.931-5c-3.314 0-6 2.686-6 6 0 .341.035.674.09 1h11.82c.055-.326.09-.659.09-1 0-3.314-2.686-6-6-6zm7.778-3.193l-2.881 2.881c.528.411 1.003.886 1.414 1.414l2.881-2.881-1.414-1.414z' />
              </svg>{' '}
              {getTime(day.sunset)}
            </li>
          </div>
        </ul>
      ))}
    </>
  );
}
