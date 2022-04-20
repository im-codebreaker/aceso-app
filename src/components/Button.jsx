import * as React from 'react';
import './Button.scss';

export default function Button({ type = 'button', className = '', children }) {
  return (
    <button type={type} className={`btn ${className}`.trim()}>
      {children}
    </button>
  );
}
