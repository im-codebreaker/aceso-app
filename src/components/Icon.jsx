import * as React from 'react';
import './Icon.scss';

export default function Icon({
  className = '',
  name,
  size = 'large',
  style = 'line',
}) {
  return (
    <i
      className={`icon-ri ri-${name}-${style} ${size} ${className}`.trim()}
    ></i>
  );
}
