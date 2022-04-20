import * as React from 'react';
import './FormInput.scss';

export default function FormInput({
  label,
  type,
  placeholder,
  className = '',
  handleRegister,
  registerLabel,
  formStateErrors,
}) {
  return (
    <div className={`form-group ${className}`.trim()}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...handleRegister(registerLabel)}
      />
      {formStateErrors[registerLabel] && (
        <p className='alert' role='alert'>
          {formStateErrors[registerLabel]?.message}
        </p>
      )}
    </div>
  );
}
