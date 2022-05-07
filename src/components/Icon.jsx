import * as React from 'react';
import './Icon.scss';

export default function Icon({
  className = '',
  name,
  size = 'large',
  style = 'line',
}) {
  return (
    <i class={`icon-ri ri-${name}-${style} ${size} ${className}`.trim()}></i>
  );
}
