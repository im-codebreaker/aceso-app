import * as React from 'react';
import Button from './Button';
import Form from './Form';
import FormInput from './FormInput';
import FormHeading from './FormHeading';
import FormFooter from './FormFooter';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Form type='login' onSubmit={handleSubmit(onSubmit)}>
      <FormHeading>
        <h2>Connect to Aceso</h2>
        <p>Connect to your Aceso account with your email.</p>
      </FormHeading>
      <FormInput
        label='Email'
        type='text'
        placeholder='Enter email'
        handleRegister={register}
        registerLabel='email'
        formStateErrors={errors}
      />
      <FormInput
        label='Password'
        type='password'
        placeholder='**********'
        handleRegister={register}
        registerLabel='password'
        formStateErrors={errors}
      />
      <Button type='submit' className='primary'>
        Continue
      </Button>
      <FormFooter>
        Don't have an account ? <Link to='/register'>Register</Link>
      </FormFooter>
    </Form>
  );
}
