import { useAuth } from 'context/Auth';
import * as React from 'react';
import { Button } from 'components/ui';

function DashBoard() {
  const { signOut } = useAuth();
  return (
    <main className='container'>
      <h1>Welcome to your DashBoard</h1>
      <Button onClick={async () => await signOut()}>Log out</Button>
    </main>
  );
}

export { DashBoard };
