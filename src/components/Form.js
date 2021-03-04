import React, { useState, useRef, useEffect } from 'react';
import './Form.css';

function Form({ options, onSubmit }) {
  const [value, setValue] = useState(0);
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    setValue(0);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [options])

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h1>Which one is more important?</h1>
      {
        options.map((option, index) => (
          <div className="option" key={`input-${index}`} >
            <input
              ref={index === 0 ? inputRef : null}
              type="radio"
              id={`option-${index}`}
              name="option"
              checked={value === index}
              onChange={() => setValue(index)} />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))
      }
      < button type="submit">Submit</button>
    </form >
  );
}

export default Form;
