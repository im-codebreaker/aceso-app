import * as React from 'react';
import Button from './Button';
import Form from './Form';
import { useAuth } from 'context/Auth';
import FormInput from './FormInput';
import FormHeading from './FormHeading';
import FormFooter from './FormFooter';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function LogInForm() {
  const [hasError, setHasError] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const { error } = await signIn({ email, password });

    if (error) {
      setHasError(error.message);
      setTimeout(() => {
        setHasError(null);
      }, 5000);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <Form type='login' onSubmit={handleSubmit(onSubmit)}>
      <FormHeading>
        <h2>Connect to Aceso</h2>
        <p>Connect to your Aceso account with your email.</p>
        {hasError && (
          <div>
            {hasError} - Email and password seems to not match, please verify
            this account is existing.
          </div>
        )}
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

export { LogInForm };
