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
      className='flex justify-between items-center gap-3  p-4 my-0 mx-auto'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col relative'>
        <input
          className='w-full text-white bg-grey border-2 border-orange py-2 px-3 rounded-xl focus:bg-white focus:text-grey focus:border-opacity-0 transition duration-500'
          placeholder='Search for a city'
          type='text'
          name='city'
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />

        {cities.length > 0 && (
          <ul className='absolute z-50 w-full top-12 bg-grey px-4 pb-2 rounded-b-xl cursor-pointer '>
            {cities.map((city) => (
              <li
                key={city.lat}
                value={city.name}
                className='text-white   hover:bg-aqua px-2 py-0.5 rounded-md '
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
      <button className='xs:hidden md:block  border-2 border-orange bg-orange rounded-xl px-4 py-2 hover:opacity-80 text-white '>
        Search
      </button>
    </form>
  );
}

export default Search;
