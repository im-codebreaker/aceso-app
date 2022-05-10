import * as React from 'react';
import './FormGroup.scss';

function FormGroup({ className = '', children }) {
  return <div className={`form-group ${className}`.trim()}>{children}</div>;
}

export { FormGroup };
