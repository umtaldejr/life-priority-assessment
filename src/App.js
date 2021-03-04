import React, { useState } from 'react';
import Form from './components/Form';
import Results from './components/Results';
import reallocate from './utils/reallocate';
import './App.css';

const INITIAL_STATE = {
  options: [
    'Family',
    'Friends',
    'Health and fitness',
    'Income',
    'Independence',
    'Influence and power',
    'Making use of talents',
    'Personal growth',
    'Positive impact on society',
    'Prestige and status',
    'Professional growth',
    'Security',
    'Spirituality/faith',
    'Spouse/partner',
    'Stimulating/rewarding work',
    'Time for leisure and relaxation',
    'Wealth/savings',
    'Where you live',
  ],
  i: 1,
  j: 0,
};

function App() {
  const [{ options, i, j }, setState] = useState(INITIAL_STATE);

  const handleSubmit = swap => {
    const isLastComparison = j + 1 >= i;
    const nextComparison = isLastComparison || swap;

    setState({
      options: swap ? reallocate(options, i, j) : options,
      i: nextComparison ? i + 1 : i,
      j: nextComparison ? 0 : j + 1
    })
  };

  const hasComparion = i < options.length;

  return (
    <div className="App">
      {hasComparion && (
        <Form
          options={[options[j], options[i]]}
          onSubmit={handleSubmit}
        />
      )}
      {
        !hasComparion && (
          <Results results={options} />
        )
      }
    </div>
  );
}

export default App;
