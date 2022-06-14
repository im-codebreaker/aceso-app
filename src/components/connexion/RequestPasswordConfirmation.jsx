import * as React from 'react';
import { ButtonLink } from 'components/ui';

function RequestPasswordConfirmation() {
  return (
    <main className='container'>
      <section className='section_request-confirmation'>
        <h2>L'email a été envoyé</h2>
        <p>
          Un email a été envoyé à votre adresse mail, veuillez vérifier votre
          boîte de réception et cliquez sur le lien reçu pour réinitialiser
          votre mot de passe.
        </p>
        <img src='https://via.placeholder.com/360' alt='' />
        <ButtonLink href='/login' fullWidth>
          Se connecter
        </ButtonLink>
      </section>
    </main>
  );
}

export { RequestPasswordConfirmation };
