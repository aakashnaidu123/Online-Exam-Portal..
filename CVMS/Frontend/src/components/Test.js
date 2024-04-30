import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuizPage = () => {
  const [answers, setAnswers] = useState({}); // State to store selected answers
  const [time, setTime] = useState(180); // 5 minutes in seconds

  // Handle checkbox change
  const handleCheckboxChange = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: {
        ...answers[questionId],
        [optionId]: !answers[questionId]?.[optionId] // Toggle the selected state
      }
    });
  };

  // Submit answers
  const handleSubmit = () => {
    console.log(answers); // You can send this data to the backend for further processing
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          // Handle timeout (e.g., auto-submit)
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1>Mock Test</h1>
      <div>
        <h3>Time Remaining: {formatTime(time)}</h3>
      </div>
      
      <div>
        <h3>Question 1: What is your favorite color?</h3>
        <label>
          <input
            type="checkbox"
            checked={answers['question1']?.['option1'] || false}
            onChange={() => handleCheckboxChange('question1', 'option1')}
          />
          Red
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question1']?.['option2'] || false}
            onChange={() => handleCheckboxChange('question1', 'option2')}
          />
          Blue
        </label>
      </div>
      <div>
        <h3>Question 2: Which programming languages do you know?</h3>
        <label>
          <input
            type="checkbox"
            checked={answers['question2']?.['option1'] || false}
            onChange={() => handleCheckboxChange('question2', 'option1')}
          />
          JavaScript
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question2']?.['option2'] || false}
            onChange={() => handleCheckboxChange('question2', 'option2')}
          />
          Python
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question2']?.['option3'] || false}
            onChange={() => handleCheckboxChange('question2', 'option3')}
          />
          Java
        </label>
      </div>
      {/* Add more questions here */}
      <div>
        <h3>Question 3: What is your favorite animal?</h3>
        <label>
          <input
            type="checkbox"
            checked={answers['question3']?.['option1'] || false}
            onChange={() => handleCheckboxChange('question3', 'option1')}
          />
          Dog
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question3']?.['option2'] || false}
            onChange={() => handleCheckboxChange('question3', 'option2')}
          />
          Cat
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question3']?.['option3'] || false}
            onChange={() => handleCheckboxChange('question3', 'option3')}
          />
          Bird
        </label>
        <div>
        <h3>Question 4: Mongo DB is Used for?</h3>
        <label>
          <input
            type="checkbox"
            checked={answers['question1']?.['option1'] || false}
            onChange={() => handleCheckboxChange('question1', 'option1')}
          />
         Frontend
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question1']?.['option2'] || false}
            onChange={() => handleCheckboxChange('question1', 'option2')}
          />
          Backend
        </label>
      </div>
      <div>
        <h3>Question 5: What is your favorite food?</h3>
        <label>
          <input
            type="checkbox"
            checked={answers['question3']?.['option1'] || false}
            onChange={() => handleCheckboxChange('question3', 'option1')}
          />
          Pizza
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question3']?.['option2'] || false}
            onChange={() => handleCheckboxChange('question3', 'option2')}
          />
          Sushi
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question3']?.['option3'] || false}
            onChange={() => handleCheckboxChange('question3', 'option3')}
          />
          Pasta
        </label>
      </div>
      <div>
        <h3>Question 6: Which is your favorite season?</h3>
        <label>
          <input
            type="checkbox"
            checked={answers['question4']?.['option1'] || false}
            onChange={() => handleCheckboxChange('question4', 'option1')}
          />
          Spring
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question4']?.['option2'] || false}
            onChange={() => handleCheckboxChange('question4', 'option2')}
          />
          Summer
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question4']?.['option3'] || false}
            onChange={() => handleCheckboxChange('question4', 'option3')}
          />
          Fall
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={answers['question4']?.['option4'] || false}
            onChange={() => handleCheckboxChange('question4', 'option4')}
          />
          Winter
        </label>
      </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/Sco">View</Link>
    </div>
  );
};

export default QuizPage;
