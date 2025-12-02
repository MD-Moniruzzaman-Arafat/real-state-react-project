import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  console.log(location);
  return (
    <>
      {user ? children : <Navigate to={'/login'} state={location.pathname} />}
    </>
  );
}
