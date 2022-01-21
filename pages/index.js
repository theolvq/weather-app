import { useEffect, useState } from 'react';
import axios from 'axios';
import Current from '../components/Current';
import Daily from '../components/Daily';
import Hourly from '../components/Hourly';
import Header from '../components/Header';

export default function Home() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [geoCodes, setGeoCodes] = useState({});
  const [response, setResponse] = useState({});

  const getGeoCodes = async (city) => {
    const { data } = await axios.post('/api/geocodes', { city });
    if (data.length > 1) {
      setCities(data);
    }
    if (data.length === 1) {
      setGeoCodes({
        name: data[0].name,
        country: data[0].country,
        lat: data[0].lat,
        lon: data[0].lon,
      });
    }
  };

  const getWeather = async (lat, lon) => {
    const { data } = await axios.post('/api/weather', { lat, lon });
    setResponse(data);
    console.log(data);
  };

  useEffect(() => {
    getGeoCodes('Whistler, British Columbia, CA');
  }, []); //eslint-disable-line

  useEffect(() => {
    if (geoCodes.lat && geoCodes.lon) getWeather(geoCodes.lat, geoCodes.lon);
  }, [geoCodes]); //eslint-disable-line

  return (
    <main className='min-h-screen main-bg'>
      <Header
        getGeoCodes={getGeoCodes}
        setGeoCodes={setGeoCodes}
        setCity={setCity}
        city={city}
        cities={cities}
        setCities={setCities}
        response={response}
      />

      <section className='max-w-screen-lg px-8 py-5 mx-auto my-0 '>
        <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-4 '>
          <Current geoCodes={geoCodes} response={response} />
          <Hourly response={response} />
        </div>
        <div className='my-4'>
          <Daily response={response} />
        </div>
      </section>
    </main>
  );
}