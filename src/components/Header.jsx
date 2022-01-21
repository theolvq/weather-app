import React from 'react';
import Search from './Search';
import logo from '../img/logo.png';

export default function Header({
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
        className='xs:max-h-20 md:max-h-24 p-4 '
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
