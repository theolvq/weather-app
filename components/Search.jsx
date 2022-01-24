import React, { useEffect } from 'react';

export default function Search({
  getGeoCodes,
  setGeoCodes,
  city,
  setCity,
  cities,
  setCities,
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

  const handleChange = ({ target }) => {
    if (target.value.length === 0) {
      setCities([]);
    }
    setCity(target.value);
  };

  useEffect(() => {
    if (city.length > 3) getGeoCodes(city);
  }, [city]); //eslint-disable-line

  return (
    <form
      className='flex justify-between items-center gap-3  p-4 my-0 mx-auto'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col relative z-50'>
        <input
          className='sm:w-80 w-full z-40 text-grey placeholder:text-grey bg-white border-2 border-orange py-2 px-3 rounded-md  focus:bg-opacity-100 focus:border-opacity-0 transition duration-500'
          placeholder='Search for a city'
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
          autoComplete='off'
        />

        {cities.length > 0 && (
          <ul className='absolute z-30 w-full top-10 pt-2 bg-grey px-4 pb-2 rounded-b-md cursor-pointer '>
            {cities.map((city) => (
              <li
                key={city.lat}
                value={city.name}
                className='text-white hover:bg-aqua px-2 py-0.5 rounded-md'
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
