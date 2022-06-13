import * as React from 'react';

function FormGroup({ className = '', children }) {
  return <div className={`form-group ${className}`.trim()}>{children}</div>;
}

export { FormGroup };
