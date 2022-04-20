import * as React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <section className='section-login'>
      <div className='section-login_heading'>
        <h2>Connect to Aceso</h2>
        <p>Connect to your Aceso account with your email.</p>
      </div>
      <form className='section-login_form'>
        <div class='signup-form_group'>
          <label>Email</label>
          <input type='text' placeholder='Enter email' />
        </div>
        <div class='signup-form_group'>
          <label>Password</label>
          <input type='password' placeholder='**********' />
        </div>
        <button type='submit'>Continue</button>
      </form>
      <div className='section-login_footer'>
        Don't have an account ? <Link to='/register'>Register</Link>
      </div>
    </section>
  );
}
