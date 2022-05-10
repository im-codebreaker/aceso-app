import * as React from 'react';
import { Link } from 'react-router-dom';

function ResetPasswordConfirmation() {
  return (
    <main className='container'>
      <main className='container'>
        <section className='section_request-confirmation'>
          <h2>Password has been updated</h2>
          <p>
            Your password has been successfully updated, you can now access to
            Aceso with your new credentials.
          </p>
          <img src='https://via.placeholder.com/360' alt='' />
          <Link to='login'>Login</Link>
        </section>
      </main>
    </main>
  );
}

export { ResetPasswordConfirmation };
