import * as React from 'react';
import './FormHeading.scss';

export default function FormHeading({ className = '', children }) {
  return <div className={`form-heading ${className}`.trim()}>{children}</div>;
}
