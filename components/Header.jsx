import Search from './Search';

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
    <header className='flex justify-between items-center max-w-screen-xl pt-8 px-8 mx-auto'>
      <Search
        getGeoCodes={getGeoCodes}
        setGeoCodes={setGeoCodes}
        setCity={setCity}
        city={city}
        cities={cities}
        setCities={setCities}
        response={response}
      />
      <h3 className='self-start font-bold text-xl uppercase bg-gradient-to-br from-cyan-300 via-sky-500 to-teal-400 text-transparent bg-clip-text '>
        Weather App
      </h3>
    </header>
  );
}
