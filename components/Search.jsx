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
      className='flex items-center gap-4'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <input
        autoComplete='false'
        name='hidden'
        type='text'
        className='hidden'
      />
      <div className='flex flex-col relative z-40'>
        <input
          className='sm:w-80 input'
          placeholder='Search for a city'
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
        />

        {cities.length > 0 && (
          <ul className='absolute z-30 w-full top-10 pt-2 bg-blue-800  pb-2 rounded-b-md cursor-pointer'>
            {cities.map((city) => (
              <li
                key={city.lat}
                value={city.name}
                className='text-slate-50 hover:bg-blue-500 px-4 py-1 rounded-md'
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
      <button className='border-2 border-blue-800 bg-blue-800 text-slate-100 font-semibold rounded-md px-4 py-2 hover:bg-slate-100 hover:border-slate-100 hover:text-blue-800 transition-all ease-in-out duration-500 group'>
        Search
      </button>
    </form>
  );
}
