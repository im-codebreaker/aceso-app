import * as React from 'react';

export default function Form({ type, onSubmit, children }) {
  return (
    <form className={`${type}-form container`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
