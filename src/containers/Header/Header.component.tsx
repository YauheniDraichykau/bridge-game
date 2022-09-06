import { memo, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash.isequal';
import { Button } from '../../controls/Button';
import { StorageService } from '../../services/tokenStorage';
import * as S from './Header.styles';
import { actions } from '../../store/common';

export const HeaderComponent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storageService = new StorageService();

  const handleLogout = () => {
    storageService.removeItem('isLogged');
    navigate('/login');
    dispatch(actions.setClearGame());
  };

  return (
    <S.Container>
      <S.GameTitle>Bridge</S.GameTitle>
      <S.AuthBtnWrapper>
        <Button label='logout' viewType='link' onClick={handleLogout} />
      </S.AuthBtnWrapper>
    </S.Container>
  );
};

export const Header = memo(HeaderComponent, isEqual);
