import axios from 'axios';

export default async function geocodesHandler(req, res) {
  const { city } = req.body;

  try {
    const { data } = await axios(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${5}&appid=${
        process.env.API_KEY
      }`,
    );

    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error');
  }
}
