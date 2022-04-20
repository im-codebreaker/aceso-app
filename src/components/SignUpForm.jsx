import * as React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
  return (
    <section className='section-signup'>
      <div className='section-signup_heading'>
        <h2>Create your Aceso account</h2>
        <p>Join us and create an account now.</p>
      </div>
      <form className='section-signup_form'>
        <div class='signup-form_group'>
          <label>Fullname</label>
          <input type='text' placeholder='Enter email' />
        </div>
        <div class='signup-form_group'>
          <label>Email</label>
          <input type='text' placeholder='Enter email' />
        </div>
        <div class='signup-form_group'>
          <label>Password</label>
          <input type='password' placeholder='**********' />
        </div>
        <p>
          By creating a new account,you're agree to our Terms & Conditions and
          Privacy Policy
        </p>
        <button type='submit'>Create account</button>
      </form>
      <div className='section-signup_footer'>
        Already have an account ? <Link to='/login'>Login</Link>
      </div>
    </section>
  );
}
