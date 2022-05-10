import * as React from 'react';
import { ButtonLink } from 'components/ui';

function RequestPasswordConfirmation() {
  return (
    <main className='container'>
      <section className='section_request-confirmation'>
        <h2>Email has been sent</h2>
        <p>
          An email has been sent to your address, please check your inbox and
          click in the received link to reset your password.
        </p>
        <img src='https://via.placeholder.com/360' alt='' />
        <ButtonLink href='/login' fullWidth>
          Login
        </ButtonLink>
      </section>
    </main>
  );
}

export { RequestPasswordConfirmation };
