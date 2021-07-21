import React from 'react';
import Search from './Search';

function Header({ getGeoCodes, setCity, city }) {
  return (
    <header className='flex'>
      <img
        src='https://home.openweathermap.org/assets/openweather-negative-logo-RGB-9c9b3f32b47b8a005ac22bb290136b1aa14e384b7dd8baf87dd08248c21ac7ea.png'
        alt='open weather logo'
      />
      <Search getGeoCodes={getGeoCodes} setCity={setCity} city={city} />
    </header>
  );
}

export default Header;
