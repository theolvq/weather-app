import React from 'react';
import Search from './Search';
import logo from '../img/logo.png';

function Header({ getGeoCodes, setCity, city }) {
  return (
    <header className='flex bg-grey w-screen'>
      <img
        src={logo}
        alt='open weather logo'
        className='min-w-0 max-h-24 p-4'
      />
      <Search getGeoCodes={getGeoCodes} setCity={setCity} city={city} />
    </header>
  );
}

export default Header;
