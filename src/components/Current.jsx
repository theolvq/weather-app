import React from 'react';

function Current({ geoCodes, response, getTime, capitalizeFirstLetter }) {
  if (!response.current) {
    return <div>loading...</div>;
  }

  return (
    <div className='bg-grey bg-opacity-60 text-white p-4  shadow-md flex flex-col  items-center'>
      <h2 className='text-2xl font-light mb-4'>Now</h2>
      <div className='mx-2 p-4 shadow-lg'>
        <h1 className='font-bold text-3xl'>
          {geoCodes.name}, {geoCodes.country}
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
          <li>Feels like {response.current.feels_like.toFixed()} °C</li>
          <li className='flex items-center'>
            {response.current.humidity}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='#fff'
                d='M9.019 15.404c-.194 0-.335-.121-.422-.364-.087-.242-.131-.61-.131-1.102s.044-.858.131-1.097c.087-.238.228-.358.422-.358.372 0 .558.485.558 1.454 0 .979-.186 1.467-.558 1.467zm5.957.477c-.194 0-.335.119-.422.358-.087.239-.131.604-.131 1.097s.044.86.131 1.102c.087.242.228.364.422.364.372 0 .558-.489.558-1.466 0-.97-.186-1.455-.558-1.455zm5.024.194c0 4.378-3.579 7.925-8 7.925-4.421 0-8-3.547-8-7.925 0-5.887 5.667-7.117 8-16.075 2.333 8.958 8 10.188 8 16.075zm-10.993.533c.667 0 1.173-.224 1.518-.672.345-.448.518-1.118.518-2.01 0-.853-.175-1.51-.526-1.969-.351-.46-.854-.689-1.51-.689-1.338 0-2.007.886-2.007 2.659 0 .869.174 1.533.524 1.992.349.46.843.689 1.483.689zm6.038-5.218h-1.396l-4.718 8.505h1.396l4.718-8.505zm1.955 5.934c0-.853-.176-1.51-.527-1.969-.351-.46-.854-.689-1.51-.689-1.338 0-2.007.886-2.007 2.658 0 .865.174 1.527.523 1.987.35.459.845.689 1.485.689.667 0 1.173-.224 1.518-.672.345-.448.518-1.116.518-2.004z'
              />
            </svg>
          </li>
          <li className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='#fff'
                d='M24 23h-24v-2h24v2zm-24-6v2h4.069c-.041-.328-.069-.661-.069-1s.028-.672.069-1h-4.069zm7.103-5.312l-2.881-2.881-1.415 1.414 2.881 2.881c.412-.529.886-1.003 1.415-1.414zm3.897-1.688h2v-5h3l-4-4-4 4h3v5zm8.931 7c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-7.931-5c-3.314 0-6 2.686-6 6 0 .341.035.674.09 1h11.82c.055-.326.09-.659.09-1 0-3.314-2.686-6-6-6zm7.778-3.193l-2.881 2.881c.528.411 1.003.886 1.414 1.414l2.881-2.881-1.414-1.414z'
              />
            </svg>
            {getTime(response.current.sunrise)}
          </li>
          <li className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='#fff'
                d='M24 23h-24v-2h24v2zm-24-6v2h4.069c-.041-.328-.069-.661-.069-1s.028-.672.069-1h-4.069zm7.103-5.312l-2.881-2.881-1.415 1.414 2.881 2.881c.412-.529.886-1.003 1.415-1.414zm5.897-10.688h-2v5h-3l4 4 4-4h-3v-5zm6.931 16c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-7.931-5c-3.314 0-6 2.686-6 6 0 .341.035.674.09 1h11.82c.055-.326.09-.659.09-1 0-3.314-2.686-6-6-6zm7.778-3.193l-2.881 2.881c.528.411 1.003.886 1.414 1.414l2.881-2.881-1.414-1.414z'
              />
            </svg>
            {getTime(response.current.sunset)}
          </li>
          <li className='flex items-center gap-4'></li>
        </ul>
      </div>
    </div>
  );
}

export default Current;
