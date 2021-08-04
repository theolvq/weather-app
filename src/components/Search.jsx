import React, { useEffect } from 'react';

function Search({
  getGeoCodes,
  setGeoCodes,
  city,
  setCity,
  cities,
  setCities,
  response,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getGeoCodes(city);
    setCity('');
  };

  const handleClick = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    const city = cities.find((city) => city.lat === Number(e.target.id));

    setGeoCodes({
      name: city.name,
      country: city.country,
      lat: city.lat,
      lon: city.lon,
      state: city.state,
    });
    setCities([]);
    setCity('');
  };

  useEffect(() => {
    if (city.length > 3) getGeoCodes(city);
  }, [city]); //eslint-disable-line

  return (
    <form
      className='container flex justify-center gap-3 items-center py-4'
      onSubmit={handleSubmit}
    >
      <div className='w-1/3 flex flex-col relative '>
        <input
          className=' text-white bg-grey border-2 border-orange py-2 px-3 rounded-xl focus:bg-white focus:text-grey focus:border-opacity-0 transition duration-500'
          placeholder='Search for a city'
          type='text'
          name='city'
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />

        {cities.length > 0 && (
          <ul className='absolute top-12 w-full bg-grey px-4 pb-2 rounded-b-lg cursor-pointer w'>
            {cities.map((city) => (
              <li
                key={city.lat}
                value={city.name}
                className='text-white relative hover:bg-aqua px-2 py-0.5 rounded-md '
                id={city.lat}
                onClick={handleClick}
              >
                {city.name}, {city.country}
                {city.state && <>, {city.state} </>}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className=' font-bold  border-2 border-orange bg-orange rounded-xl px-4 py-2 hover:opacity-80 text-white '>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          className=' h-6 w-6 animate-spin'
          viewBox='0 0 24 24'
        >
          <path
            fill={fillColor}
            d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z'
          />
        </svg> */}
        Search
      </button>
    </form>
  );
}

export default Search;
