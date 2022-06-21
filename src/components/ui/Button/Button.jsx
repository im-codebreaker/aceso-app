import * as React from 'react';
import './Button.scss';

function Button({
  children,
  className = '',
  fullWidth = false,
  color = 'primary',
  size = 'medium',
  variant = 'standard',
  ...rest
}) {
  const defineClass = `btn btn-${size} btn-${color} ${variant} ${
    fullWidth ? 'btn-fw' : ''
  } ${className}`.trim();

  return (
    <button className={defineClass} {...rest}>
      {children}
    </button>
  );
}

export { Button };
