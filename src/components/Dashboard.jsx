import * as React from 'react';
import { Navigate } from 'react-router-dom';

function Dashboard({ user }) {
  if (!user) {
    return <Navigate to='/login' replace />;
  }
}

export { Dashboard };
