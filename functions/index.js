const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });

const API_KEY = functions.config().api.key;

exports.geoCode = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const { city } = req.body;
    const encodedCity = encodeURIComponent(city);

    try {
      const { data } = await axios(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodedCity}&limit=${5}&appid=${API_KEY}`,
      );

      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send('Error');
    }
  });
});

exports.weather = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const { lat, lon } = req.body;
    const encodedLat = encodeURIComponent(lat);
    const encodedLon = encodeURIComponent(lon);

    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${encodedLat}&lon=${encodedLon}&appid=${API_KEY}&units=metric`,
      );
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send('Error');
    }
  });
});
