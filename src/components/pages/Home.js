import React, { useEffect, useState } from 'react';
import './Home.css';

function Home(props) {
  // Declare a new state variable, which we'll call "count"
  // const [weatherdata, set_weatherdata] = useState('No Data');
  const [cityName, set_cityName] = useState('No cityName');
  const [weatherDescription, set_weatherDescription] = useState(
    'No weatherDescription'
  );

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // send HTTP request then save response to variable
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=d4da841c84606053b9db5e5a9b5b800f'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // set_weatherdata(data.name);
        set_cityName(data.name);
        set_weatherDescription(data.weather[0].description);
      });
  });

  return (
    <div class="home-wrapper">
      <h1 class="home-title">🌞 wearther.io 🌞</h1>
      <p>City: {cityName}</p>
      <p>Weather description: {weatherDescription}</p>
    </div>
  );
}

export default Home;
