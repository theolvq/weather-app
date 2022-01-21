import Image from 'next/image';
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
    <header className='flex bg-white bg-opacity-20 backdrop-filter backdrop-blur-md min-w-screen p-2'>
      <div className='xs:max-h-20 md:max-h-24 w-48 relative'>
        <Image src={logo} alt='open weather logo' layout='fill' priority />
      </div>
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
