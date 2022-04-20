import * as React from 'react';
import Button from './Button';
import Form from './Form';
import FormInput from './FormInput';
import FormHeading from './FormHeading';
import FormFooter from './FormFooter';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
  return (
    <Form type='signup'>
      <FormHeading>
        <h2>Create your Aceso account</h2>
        <p>Join us and create an account now.</p>
      </FormHeading>
      <FormInput
        label='Fullname'
        type='text'
        placeholder='Enter your fullname'
      />
      <FormInput label='Email' type='text' placeholder='Enter email' />
      <FormInput label='Password' type='password' placeholder='**********' />
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
