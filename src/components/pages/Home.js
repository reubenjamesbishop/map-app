import React from 'react';
import './Home.css';

// https://api.openweathermap.org/data/2.5/weather?q={Sydney}&appid={apikey}

// https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=d4da841c84606053b9db5e5a9b5b800f

function getResult(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=d4da841c84606053b9db5e5a9b5b800f'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('Data is ', data);
      console.log(
        'Weather for ' + data.name + ' is: ' + data.weather[0].description
      );
    });
}

function Home() {
  getResult('Adelaide');
  return (
    <div class="home-wrapper">
      <h1 class="home-title">Weather</h1>
      <p>globalResponse is...</p>
    </div>
  );
}

export default Home;
