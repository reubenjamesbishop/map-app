import React, { useEffect, useState } from 'react';
import './Counter.css';

function Counter(props) {
  // State Variables up Here
  const [count, set_count] = useState(0);

  const increase_count = (event) => {
    event.preventDefault();
    set_count(count + 1);
  };

  const decrease_count = (event) => {
    event.preventDefault();
    if (count > 0) {
      set_count(count - 1);
    }
  };

  useEffect(() => {
    //This function runs on pageload (use it for API calls).
    console.log('Component has mounted...');
  });

  return (
    <>
      <div class="container">
        <h1>Simple Counter Example</h1>
        <h4>/w React Hooks</h4>
        <div class="row">
          <div class="counter-outer">
            <button
              class="btn btn-danger counter-inner"
              onClick={decrease_count}
            >
              -
            </button>
            <h1 class="counter-display counter-inner">{count}</h1>
            <button
              class="btn btn-success counter-inner"
              onClick={increase_count}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
