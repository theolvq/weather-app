import axios from 'axios';

export default async function weatherHandler(req, res) {
  const { lat, lon } = req.body;

  try {
    const { data } = await axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`,
    );
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error');
  }
}
