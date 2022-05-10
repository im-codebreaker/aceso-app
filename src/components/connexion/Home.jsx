import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink } from 'components/ui';
import './Home.scss';

function Home() {
  return (
    <main className='home container'>
      <h1>Aceso - App</h1>
      <p>Easy manage your journey and focus more on your nursing care.</p>
      <ButtonLink hRef='/register' fullWidth>
        Get Started
      </ButtonLink>
      <div className='home_footer'>
        <p>
          Already have an account ?<Link to='/login'>Login</Link>
        </p>
      </div>
    </main>
  );
}

export { Home };
