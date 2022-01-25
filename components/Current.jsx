import Image from 'next/image';
import React from 'react';
import { capitalizeFirstLetter } from '../utils';

export default function Current({ geoCodes, response }) {
  const { current } = response;
  if (!current) {
    return (
      <div className='card flex flex-col items-center min-w-min'>
        <div className='text-2xl h-8 w-9/12 placeholder'></div>
        <div className='mx-2 p-4 w-10/12'>
          <h1 className='text-xl h-6 w-full text-center placeholder mb-8'></h1>
          <ul className='flex flex-col items-center gap-1'>
            <li className='h-4 w-full placeholder'></li>
            <li className='h-4 w-full placeholder'></li>
            <li className='h-4 w-full placeholder'></li>
            <li className='h-4 w-full placeholder '></li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='card flex flex-col items-center min-w-min'>
      <h2 className='text-2xl'>Now</h2>
      <div className='mx-2 p-4 w-10/12'>
        <h1 className='font-bold text-xl text-center'>
          {geoCodes.name}, {geoCodes.country}
          {geoCodes.state && <>, {geoCodes.state}</>}
        </h1>
        <ul className='flex flex-col items-center gap-1'>
          <li className='font-normal text-6xl '>
            {response.current.temp.toFixed()}°C
          </li>
          <li className='flex items-center'>
            <Image
              className='inline pb-2'
              src={`http://openweathermap.org/img/wn/${response.current.weather[0].icon}.png`}
              alt={`${response.current.weather[0].description} icon`}
              width={50}
              height={50}
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
