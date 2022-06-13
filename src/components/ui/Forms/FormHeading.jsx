import * as React from 'react';

function FormHeading({ className = '', children }) {
  return <div className={`form-heading ${className}`.trim()}>{children}</div>;
}

export { FormHeading };
