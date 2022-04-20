import * as React from 'react';
import './FormFooter.scss';

export default function FormFooter({ className = '', children }) {
  return <div className={`form-footer ${className}`.trim()}>{children}</div>;
}
