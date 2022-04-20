import * as React from 'react';
import './FormFooter.scss';

export default function FormFooter({ extraClass = '', children }) {
  return <div className={`form-footer ${extraClass}`.trim()}>{children}</div>;
}
