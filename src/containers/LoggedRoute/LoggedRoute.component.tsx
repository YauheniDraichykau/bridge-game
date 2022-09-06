import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { StorageService } from '../../services/tokenStorage';
import { LoggedRouteProps } from './LoggedRoute.interfaces';

export const LoggedRoute = ({ children }: LoggedRouteProps): ReactElement => {
  const storageService = new StorageService();
  const isAuthenticated = storageService.getItem('isLogged');

  return isAuthenticated !== 'true' ? children : <Navigate to='/' />;
};
