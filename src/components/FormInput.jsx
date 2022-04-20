import * as React from 'react';
import './FormInput.scss';

export default function FormInput({
  label,
  type,
  placeholder,
  className = '',
}) {
  return (
    <div className={`form-group ${className}`.trim()}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
