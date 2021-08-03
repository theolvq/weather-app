import React from 'react';
import Search from './Search';
import logo from '../img/logo.png';

function Header({
  getGeoCodes,
  setGeoCodes,
  setCity,
  city,
  cities,
  setCities,
  response,
}) {
  return (
    <header className='flex bg-grey min-w-screen'>
      <img
        src={logo}
        alt='open weather logo'
        className='min-w-0 max-h-24 p-4'
      />
      <Search
        getGeoCodes={getGeoCodes}
        setGeoCodes={setGeoCodes}
        setCity={setCity}
        city={city}
        cities={cities}
        setCities={setCities}
        response={response}
      />
    </header>
  );
}

export default Header;
