import * as React from 'react';
import Button from './Button';
import Form from './Form';
import FormHeading from './FormHeading';
import FormFooter from './FormFooter';
import FormGroup from './FormGroup';
import Label from './Label';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from 'context/Auth';
import Input from './Input';

const schema = yup.object({
  fullname: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function SignUpForm() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const { error } = await signUp({ email, password });
    if (error) {
      // @info supabase seems to not throw an error on duplicate email https://github.com/supabase/supabase-js/issues/296#issuecomment-962391773
      console.error(error);
    } else {
      // @todo add modal succes created
      // @todo message confirm mail inscription
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <FormProvider {...methods}>
      <Form type='signup' onSubmit={methods.handleSubmit(onSubmit)}>
        <FormHeading>
          <h2>Create your Aceso account</h2>
          <p>Join us and create an account now.</p>
        </FormHeading>
        <FormGroup>
          <Label>Fullname</Label>
          <Input name='fullname' placeholder='Enter your fullname' />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input name='email' type='email' placeholder='Enter your email' />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            name='password'
            type='password'
            placeholder='Enter your password'
          />
        </FormGroup>
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
    </FormProvider>
  );
}

export { SignUpForm };
