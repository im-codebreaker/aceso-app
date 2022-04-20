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
  fullname: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Form type='signup' onSubmit={handleSubmit(onSubmit)}>
      <FormHeading>
        <h2>Create your Aceso account</h2>
        <p>Join us and create an account now.</p>
      </FormHeading>
      <FormInput
        label='Fullname'
        type='text'
        placeholder='Enter your fullname'
        handleRegister={register}
        registerLabel='fullname'
        formStateErrors={errors}
      />
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
      <p>
        By creating a new account,you're agree to our Terms & Conditions and
        Privacy Policy
      </p>
      <Button type='submit' className='primary'>
        Create Account
      </Button>
      <FormFooter>
        Already have an account ? <Link to='/login'>Login</Link>
      </FormFooter>
    </Form>
  );
}
