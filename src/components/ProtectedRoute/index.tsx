import { Navigate } from 'react-router-dom';

interface IProps {
  children: any;
}

const ProtectedRoute = ({ children }: IProps) => {
  if (!localStorage.getItem('tickets_token')) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
