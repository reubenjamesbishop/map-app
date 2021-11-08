import React, { useEffect, useState } from 'react';
import './QuizCard.css';

function QuizCard(props) {
  return (
    <>
      <div class="card">
        <img
          class="card-img-top"
          src={props.src}
          alt="Card image cap"
          width="200px"
          height="150px"
        />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
        </div>
      </div>
    </>
  );
}

export default QuizCard;
