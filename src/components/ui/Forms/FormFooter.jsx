import * as React from 'react';

function FormFooter({ className = '', children }) {
  return <div className={`form-footer ${className}`.trim()}>{children}</div>;
}

export { FormFooter };
