import * as React from 'react';
import './FormFooter.scss';

function FormFooter({ className = '', children }) {
  return <div className={`form-footer ${className}`.trim()}>{children}</div>;
}

export { FormFooter };
