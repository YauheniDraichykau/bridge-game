import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';
import { LoggedRoute } from '../LoggedRoute';
import * as S from './App.styles';
import { Header } from '../Header';
import { Main } from '../Main';
import { Login } from '../Login';

export const App: FC = () => (
  <S.Container>
    <Routes>
      <Route
        path='/*'
        element={
          <PrivateRoute>
            <>
              <Header />
              <Main />
            </>
          </PrivateRoute>
        }
      />
      <Route
        path='/login'
        element={
          <LoggedRoute>
            <Login />
          </LoggedRoute>
        }
      />
    </Routes>
  </S.Container>
);
