import * as React from 'react';

function Form({ type, className = '', onSubmit, children }) {
  return (
    <form className={`form_${type} ${className}`.trim()} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export { Form };
