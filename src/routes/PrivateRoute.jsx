import * as React from 'react';
import { useAuth } from 'context/Auth';
import { useNavigate, Outlet } from 'react-router-dom';
import { Navigation } from '../components/dashboard';

function PrivateRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  });

  return (
    user && (
      <>
        <Navigation />
        <Outlet />
      </>
    )
  );
}

export { PrivateRoute };
