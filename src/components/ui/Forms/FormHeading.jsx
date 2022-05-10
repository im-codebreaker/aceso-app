import * as React from 'react';
import './FormHeading.scss';

function FormHeading({ className = '', children }) {
  return <div className={`form-heading ${className}`.trim()}>{children}</div>;
}

export { FormHeading };
