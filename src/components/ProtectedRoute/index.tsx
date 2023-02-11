import { Navigate } from 'react-router-dom';
import { getCookie } from '../../helpers/cookie';

interface IProps {
  children: any;
}

const ProtectedRoute = ({ children }: IProps) => {
  if (!getCookie('tickets_token')) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
