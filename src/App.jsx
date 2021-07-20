import './App.css';
import env from 'react-dotenv';
import { useEffect, useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [response, setResponse] = useState({});

  const fetchData = async city => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.API_KEY}&units=metric`
    );
    console.log(res);
    const json = await res.json();
    console.log(json);
    setResponse(json);
  };

  useEffect(() => {
    fetchData('Vancouver');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetchData(city);
    setCity('');
  };

  const getTime = time => new Date(time * 1000).toLocaleTimeString();

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='city'
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        {response.name && (
          <>
            <h2>Current Weather in {response.name}</h2>
            <ul>
              <li>Temperature now {response.main.temp} C</li>
              <li>Feels like {response.main.feels_like} C</li>
              <li>
                Weather for today {response.weather[0].description}
                {/* <img
                  className='weather-icon'
                  src={`http://openweathermap.org/img/wn/${response.weather[0].icon}.png`}
                  alt={`${response.weather[0].description} icon`}
                /> */}
              </li>
              <li>Sunrise at {getTime(response.sys.sunrise)} </li>
              <li>Sunset at {getTime(response.sys.sunset)} </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
