import * as React from 'react';
import './Select.scss';

function Select({ options, placeholder, handleChange }) {
  const optionsArr = [];

  for (const key in options) {
    optionsArr.push({ label: options[key], value: key });
  }

  return (
    <select className='select' onChange={handleChange}>
      <option value=''>{placeholder}</option>
      {optionsArr.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

export { Select };
