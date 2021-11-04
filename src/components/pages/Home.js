import React, { useEffect, useState } from 'react';
import './Home.css';

// function getResult(city) {
//   fetch(
//     'https://api.openweathermap.org/data/2.5/weather?q=' +
//       city +
//       '&appid=d4da841c84606053b9db5e5a9b5b800f'
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Data is ', data);
//       console.log(
//         'Weather for ' + data.name + ' is: ' + data.weather[0].description
//       );
//     });
// }

function Home(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div class="home-wrapper">
      <h1 class="home-title">Weather</h1>
      <p>Count: {count}</p>
      <button class="btn btn-success" onClick={() => setCount(count + 1)}>
        Counter
      </button>
    </div>
  );
}

export default Home;
