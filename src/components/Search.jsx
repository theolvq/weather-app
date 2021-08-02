import React from 'react';

function Search({ getGeoCodes, city, setCity, response }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getGeoCodes(city);
    setCity('');
  };

  const fillColor = response.current ? '#f2f2f2' : '#f2f2f200';
  return (
    <form
      className='container flex justify-center gap-3 items-center'
      onSubmit={handleSubmit}
    >
      <input
        className='bg-grey border-2 border-orange py-2 px-3 w-1/3 rounded-xl focus:bg-white focus:border-opacity-0 transition duration-500'
        placeholder='Search for a city'
        type='text'
        name='city'
        value={city}
        onChange={({ target }) => setCity(target.value)}
      />
      <button className='flex gap-4  border-2 border-orange bg-orange rounded-xl pl-4 pr-12 py-2 hover:opacity-80 text-white '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className=' h-6 w-6 animate-spin'
          viewBox='0 0 24 24'
        >
          <path
            fill={fillColor}
            d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z'
          />
        </svg>
        Search
      </button>
    </form>
  );
}

export default Search;
