import * as React from 'react';
import Button from './Button';
import Form from './Form';
import FormInput from './FormInput';
import FormHeading from './FormHeading';
import FormFooter from './FormFooter';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from 'context/Auth';

const schema = yup.object({
  fullname: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async ({ fullname, email, password }) => {
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

export { SignUpForm };
