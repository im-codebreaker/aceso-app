import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink } from 'components/ui';
import './Home.scss';

function Home() {
  return (
    <main className='home container'>
      <div className='home_start'>
        <h1>Aceso - App</h1>
        <p>
          Gérez facilement vos tournées et concentrez-vous d'avantage sur vos
          soins infirmiers.
        </p>
        <ButtonLink hRef='/register' fullWidth>
          Commencer
        </ButtonLink>
        <div className='home_footer'>
          <p>
            Vous disposez déjà d'un compte ?{' '}
            <Link to='/login'>Se connecter</Link>
          </p>
        </div>
      </div>
      <div className='home_image'></div>
    </main>
  );
}

export { Home };
