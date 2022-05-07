import * as React from 'react';
import './Label.scss';

export default function Label({
  size = 'large',
  className = '',
  children = 'Text Label',
}) {
  return (
    <label className={`label label-${size} ${className}`.trim()}>
      {children}
    </label>
  );
}
