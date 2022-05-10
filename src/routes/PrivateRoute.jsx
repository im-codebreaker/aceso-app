import { useAuth } from 'context/Auth';
import { useNavigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return user ? <Outlet /> : navigate('/login');
}

export { PrivateRoute };
