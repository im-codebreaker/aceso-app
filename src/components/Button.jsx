import * as React from 'react';
import './Button.scss';

export default function Button({
  children,
  className = '',
  disabled = false,
  size = 'medium',
  type = 'button',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn ${className}`.trim()}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
