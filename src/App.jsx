import './App.css';
import env from 'react-dotenv';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Current from './components/Current';
import Daily from './components/Daily';

function App() {
  const [city, setCity] = useState('');
  const [geoCodes, setGeoCodes] = useState({});
  const [response, setResponse] = useState({});

  const fetchData = async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${env.API_KEY}&units=metric`
    );
    console.log('fetch res', res);
    const json = await res.json();
    console.log('fetch json', json);
    setResponse(json);
  };

  const getGeoCodes = async city => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${5}&appid=${
        env.API_KEY
      }`
    );
    console.log('geo res', res);
    const json = await res.json();
    console.log('geo json', json);

    setGeoCodes({
      name: json[0].name,
      lat: json[0].lat,
      lon: json[0].lon,
    });
  };

  useEffect(() => {
    getGeoCodes('Vancouver');
  }, []);

  useEffect(() => {
    if (geoCodes.lat && geoCodes.lon) fetchData(geoCodes.lat, geoCodes.lon);
  }, [geoCodes]);

  const handleSubmit = e => {
    e.preventDefault();
    getGeoCodes(city);
    setCity('');
  };
  const getTime = time => new Date(time * 1000).toLocaleTimeString();
  const getDate = time => new Date(time * 1000).toLocaleDateString();

  return (
    <div>
      <h2>Weather App</h2>
      <Search handleSubmit={handleSubmit} setCity={setCity} city={city} />
      <Current geoCodes={geoCodes} response={response} getTime={getTime} />
      <Daily response={response} getDate={getDate} getTime={getTime} />
    </div>
  );
}

export default App;
