import * as React from 'react';
import './Button.scss';

export default function Button({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn btn-${size} btn-${variant} ${
        fullWidth ? 'btn-fw' : ''
      } ${className}`.trim()}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
