import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { StorageService } from '../../services/tokenStorage';
import { PrivateRouteProps } from './PrivateRoute.interfaces';

export const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  const storageService = new StorageService();
  const isAuthenticated = storageService.getItem('isLogged');

  return isAuthenticated === 'true' ? children : <Navigate to='/login' />;
};
