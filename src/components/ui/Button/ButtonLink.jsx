import * as React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

function ButtonLink({
  className = '',
  fullWidth = false,
  hRef = '/',
  size = 'medium',
  variant = 'primary',
  children,
}) {
  return (
    <Link
      className={`btn btn-${size} btn-${variant} ${
        fullWidth ? 'btn-fw' : ''
      } ${className}`.trim()}
      to={hRef}
    >
      {children}
    </Link>
  );
}

export { ButtonLink };
