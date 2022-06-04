import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import './Radio.scss';

function Radio({
  className = '',
  name,
  value,
  ...rest
}){
  const { register } = useFormContext();

  return <input className={`radio ${className}`.trim()} type='radio' {...register(name)} value={value} {...rest}/>
}

export { Radio }