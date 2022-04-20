import * as React from 'react';
import Button from './Button';
import Form from './Form';
import FormInput from './FormInput';
import FormHeading from './FormHeading';
import FormFooter from './FormFooter';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <Form type='login'>
      <FormHeading>
        <h2>Connect to Aceso</h2>
        <p>Connect to your Aceso account with your email.</p>
      </FormHeading>
      <FormInput label='Email' type='text' placeholder='Enter email' />
      <FormInput label='Password' type='password' placeholder='**********' />
      <Button type='submit' className='primary'>
        Continue
      </Button>
      <FormFooter>
        Don't have an account ? <Link to='/register'>Register</Link>
      </FormFooter>
    </Form>
  );
}
