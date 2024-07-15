import React, { useState } from 'react';

const Quastion = (props) => {
  //   console.log(props.answers.length);

  const [questions, setQuestions] = useState('');
  const [answer, setAnswer] = useState('');

  function getQuestion(e) {
    setQuestions(e.target.value);
  }

  function randomAnswer() {
    const random = Math.floor(Math.random() * props.answers.length);
    setAnswer(props.answers[random]);
    console.log(random);
  }
  console.log(answer);
  return (
    <div>
      <label htmlFor=''>
        <input
          type='text'
          placeholder='Ask a question...'
          onChange={getQuestion}
        />
        <button onClick={randomAnswer}>Ask</button>
      </label>

      <p>{answer}</p>
    </div>
  );
};

export default Quastion;
