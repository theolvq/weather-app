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
        className='bg-grey border-2 border-orange py-2 px-3 w-1/3 rounded-xl focus:bg-white focus:border-opacity-0 transition duration-500'
        placeholder='Search for a city'
        type='text'
        name='city'
        value={city}
        onChange={({ target }) => setCity(target.value)}
      />
      <button className='bg-orange rounded-xl px-10 py-2 hover:opacity-80 text-white '>
        Search
      </button>
    </form>
  );
}

export default Search;
