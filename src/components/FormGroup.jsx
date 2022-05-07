import * as React from 'react';
import './FormGroup.scss';

export default function FormGroup({ className = '', children }) {
  return <div className={`form-group ${className}`.trim()}>{children}</div>;
}
