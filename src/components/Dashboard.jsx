import * as React from 'react';
import { useAuth } from 'context/Auth';

function Dashboard() {
  const { user } = useAuth();

  return <h1>Hello {user.email}</h1>;
}

export { Dashboard };
