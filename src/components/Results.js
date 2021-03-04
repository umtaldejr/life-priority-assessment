import React from 'react';
import './Results.css';

function getVariant(index) {
  if (index <= 5) return 'essentials';
  if (index <= 11) return 'nicetohaves';
  return 'nonessentials';
}

function Results({ results }) {
  return (
    <ul className="Result">
      {
        results.map((item, index) => (
          <li key={item} className={getVariant(index)}>
            {item}
          </li>
        ))
      }
    </ul>
  );
}

export default Results;
