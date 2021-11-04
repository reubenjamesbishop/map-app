import React, { useEffect, useState } from 'react';
import './Home.css';

function Home(props) {
  // Declare a new state variable, which we'll call "count"
  const [inputCity, set_inputCity] = useState('Sydney');
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
        console.log('Input City Name: ', inputCity);
        set_cityName(data.name);
        set_weatherDescription(data.weather[0].description);
      });
  });

  return (
    <div class="home-wrapper">
      <h1 class="home-title">wearther.io</h1>

      <div class="form-wrapper">
        <form class="input-form">
          <div class="form-group">
            <label class="input-label" for="exampleFormControlInput1">
              Enter city name
            </label>
            <input
              type="text"
              class="form-control"
              id="cityName"
              placeholder=""
            />
            <p>You entered: {inputCity}</p>
          </div>
          <button
            class="btn btn-success"
            onClick={() => set_inputCity('Adelaide')}
          >
            Submit
          </button>
        </form>
      </div>

      <p>City: {cityName}</p>
      <p>Weather description: {weatherDescription}</p>
    </div>
  );
}

export default Home;
