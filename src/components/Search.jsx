import React from 'react';

function Search({ getGeoCodes, city, setCity }) {
  const handleSubmit = e => {
    e.preventDefault();
    getGeoCodes(city);
    setCity('');
  };
  return (
    <form
      className='container flex justify-center gap-3 items-center'
      onSubmit={handleSubmit}
    >
      <input
        className='py-2 px-3 w-2/3 rounded-xl'
        placeholder='Search for a city'
        type='text'
        name='city'
        value={city}
        onChange={({ target }) => setCity(target.value)}
      />
      <button className='bg-orange rounded-xl px-10 py-2 hover:opacity-80 text-white'>
        Search
      </button>
    </form>
  );
}

export default Search;
