import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='home container'>
      <h1>Aceso - App</h1>
      <p>Easy manage your journey and focus more on your nursing care.</p>
      <Link to='/register'>Get Started</Link>
      <div>
        Already have an account ?<Link to='/login'>Login</Link>
      </div>
    </main>
  );
}
