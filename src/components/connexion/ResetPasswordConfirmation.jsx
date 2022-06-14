import * as React from 'react';
import { ButtonLink } from 'components/ui';

function ResetPasswordConfirmation() {
  return (
    <main className='container'>
      <main className='container'>
        <section className='section_request-confirmation'>
          <h2>Le mot de passe a été mis à jour</h2>
          <p>
            Votre mot de passe a été mis à jour avec succès, vous pouvez accéder
            des maintenant à votre application Aceso avec vos nouveaux
            identifiants.
          </p>
          <img src='https://via.placeholder.com/360' alt='' />
          <ButtonLink href='/login' fullWidth>
            Se connecter
          </ButtonLink>
        </section>
      </main>
    </main>
  );
}

export { ResetPasswordConfirmation };
