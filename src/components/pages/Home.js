import React, { useEffect, useState } from 'react';
import './Home.css';

function calculateClothing() {
  return 'Tee shirt and long pants.';
}

function Home(props) {
  // Declare a new state variable, which we'll call "count"
  const [inputCity, set_inputCity] = useState('');
  const [cityName, set_cityName] = useState('');
  const [weatherDescription, set_weatherDescription] = useState(
    'No weatherDescription'
  );
  const [temp, set_temp] = useState(null);
  const [humidity, set_humidity] = useState('');
  const [wind, set_wind] = useState('');
  const [clothingRec, set_clothingRec] = useState('Banana');

  const handleSubmit = (event) => {
    event.preventDefault();
    set_inputCity(event.target.cityName.value);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        inputCity +
        '&appid=d4da841c84606053b9db5e5a9b5b800f'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('Input City Name: ', inputCity);
        set_cityName(data.name);
        set_weatherDescription(data.weather[0].description);
        set_temp(Math.round(data.main.temp - 273.15));
        set_humidity(Math.round(data.main.humidity));
        set_wind(Math.round(data.wind.speed));
      });
  });

  useEffect(() => {
    var shorts = false;
    console.log('Temp -->', temp);
    if (temp == null) {
      set_clothingRec('');
    } else if (temp < 10) {
      set_clothingRec('Long pants + Jumper.');
    } else if (temp < 20) {
      set_clothingRec('Long Pants + Tee-shirt.');
    } else {
      set_clothingRec('Shorts + Tee-shirt.');
    }
  });

  return (
    <div class="home-wrapper">
      <h1 class="home-title">wearthr</h1>
      <p id="wearthr-description">let the weather decide</p>

      <div class="form-wrapper">
        <form class="input-form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label class="input-label" for="exampleFormControlInput1">
              Enter city name
            </label>
            <input
              type="text"
              class="form-control"
              id="cityName"
              placeholder=""
              name="cityName"
            />
            {/* <p>You entered: {inputCity}</p> */}
          </div>
          <button class="btn btn-success">Submit</button>
        </form>
      </div>

      <p>City: {cityName}</p>
      <p>Temperature (°C): {temp}</p>
      <p>Humidity: {humidity}</p>
      <p>Wind: {wind}</p>
      <p>Weather is: {weatherDescription}</p>
      <h1 id="result-header">You should wear:</h1>
      <h4 id="result-content">{clothingRec}</h4>
    </div>
  );
}

export default Home;
