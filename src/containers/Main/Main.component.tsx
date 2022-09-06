import { memo, FC } from 'react';
import isEqual from 'lodash.isequal';
import { BalanceLine } from '../../views/BalanceLine';
import { GameTitle } from '../../views/GameTitle';
import { Board } from '../Board';
import * as S from './Main.styles';

export const MainComponent: FC = () => (
  <S.Container>
    <BalanceLine />
    <GameTitle />
    <Board />
  </S.Container>
);

export const Main = memo(MainComponent, isEqual);
