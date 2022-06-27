import * as React from 'react';
import './Icon.scss';

function Icon({ className = '', name, size = 'large', style = 'line' }) {
  const defineClass = `icon-ri ri-${name}-${style} ${size} ${className}`.trim();

  return <i className={defineClass} aria-hidden='true'></i>;
}

export { Icon };
