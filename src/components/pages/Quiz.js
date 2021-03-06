import React, { useEffect, useState } from 'react';
import './Quiz.css';

import QuizCard from '../QuizCard';

function Quiz(props) {
  // State Variables up Here
  const [count, set_count] = useState(0);
  const [current_question, set_current_question] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();

    set_current_question(current_question + 1);

    var elmntToView = document.getElementById(
      'question' + current_question.toString()
    );

    elmntToView.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    console.log('Scrolling to', current_question.toString());
  };

  useEffect(() => {
    //This function runs on pageload (use it for API calls).
    console.log('Component has mounted...');
  });

  return (
    <>
      <div class="page-wrapper container">
        <h1 class="page-title">
          <strong>What beer are you?</strong>
          {current_question}
        </h1>
        <div class="content-container">
          <div id="question1" class="row quiz-row" onClick={handleClick}>
            <div class="question-header-wrapper">
              <h3 class="question-header">
                Question 1: What would you rather have for breakfast?
              </h3>
            </div>
            <div class="options">
              <QuizCard
                // onClick={set_count(count + 1)}
                name="Croissants"
                src="https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-articleLarge.jpg"
              />
              <QuizCard
                // onClick={set_count(count + 2)}
                name="Cereal"
                src="https://www.verywellhealth.com/thmb/LiEYTC9ZucAPtgIkxivHFQQpXUY=/1333x1000/smart/filters:no_upscale()/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg"
              />
              <QuizCard
                // onClick={set_count(count + 3)}
                name="Smoothie"
                src="https://www.asweetpeachef.com/wp-content/uploads/2017/05/high-protein-fruit-smoothie-recipes-square.jpg"
              />
              <QuizCard
                // onClick={set_count(count + 4)}
                name="Bacon &amp; Eggs"
                src="https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop"
              />
            </div>
          </div>
          <div id="question2" class="row quiz-row" onClick={handleClick}>
            <h3>Question 2: What would you rather have for breakfast?</h3>
            <div class="options">
              <QuizCard
                name="Croissants"
                src="https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-articleLarge.jpg"
              />
              <QuizCard
                name="Cereal"
                src="https://www.verywellhealth.com/thmb/LiEYTC9ZucAPtgIkxivHFQQpXUY=/1333x1000/smart/filters:no_upscale()/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg"
              />
              <QuizCard
                name="Smoothie"
                src="https://www.asweetpeachef.com/wp-content/uploads/2017/05/high-protein-fruit-smoothie-recipes-square.jpg"
              />
              <QuizCard
                name="Bacon &amp; Eggs"
                src="https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop"
              />
            </div>
          </div>
          <div id="question3" class="row quiz-row" onClick={handleClick}>
            <h3>Question 3: What would you rather have for breakfast?</h3>
            <div class="options">
              <QuizCard
                name="Croissants"
                src="https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-articleLarge.jpg"
              />
              <QuizCard
                name="Cereal"
                src="https://www.verywellhealth.com/thmb/LiEYTC9ZucAPtgIkxivHFQQpXUY=/1333x1000/smart/filters:no_upscale()/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg"
              />
              <QuizCard
                name="Smoothie"
                src="https://www.asweetpeachef.com/wp-content/uploads/2017/05/high-protein-fruit-smoothie-recipes-square.jpg"
              />
              <QuizCard
                name="Bacon &amp; Eggs"
                src="https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
