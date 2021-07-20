import React from 'react';

function Search({ handleSubmit, city, setCity }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='city'
        value={city}
        onChange={({ target }) => setCity(target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
