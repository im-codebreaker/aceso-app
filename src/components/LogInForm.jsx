import * as React from 'react';
import Button from './Button';
import Form from './Form';
import { useAuth } from 'context/Auth';
import FormHeading from './FormHeading';
import FormGroup from './FormGroup';
import Label from './Label';
import FormFooter from './FormFooter';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from './Input';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function LogInForm() {
  const [hasError, setHasError] = React.useState(null);
  const methods = useForm({ resolver: yupResolver(schema) });

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
    <FormProvider {...methods}>
      <Form type='login' onSubmit={methods.handleSubmit(onSubmit)}>
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
        <FormGroup>
          <Label>Email</Label>
          <Input name='email' type='email' placeholder='Enter email' />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            name='password'
            type='password'
            placeholder='Enter your password'
          />
        </FormGroup>
        <Button type='submit' className='primary'>
          Continue
        </Button>
        <FormFooter>
          Don't have an account ? <Link to='/register'>Register</Link>
        </FormFooter>
      </Form>
    </FormProvider>
  );
}

export { LogInForm };
