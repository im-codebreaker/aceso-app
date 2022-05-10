import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { Alert } from '../Alert/Alert';
import './Input.scss';

function Input({
  className = '',
  disabled = false,
  name,
  placeholder = '',
  type = 'text',
}) {
  const {
    register,
    formState: { isValid, errors },
  } = useFormContext();
  return (
    <>
      <input
        className={`form-control ${className}`.trim()}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
      />

      {!isValid && errors[name] && (
        <Alert message={errors[name].message} ghost severity='error' />
      )}
    </>
  );
}

export { Input };
