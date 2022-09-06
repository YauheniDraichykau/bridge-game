import { memo, FC } from 'react';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import { getBalanceSelector, getBetSelector } from '../../store/common';
import * as S from './BalanceLine.styles';

export const BalanceLineComponent: FC = () => {
  const balance = useSelector(getBalanceSelector);
  const bet = useSelector(getBetSelector);

  return (
    <S.Container>
      <div>Balance: {balance}</div>
      <div>Bet: {bet}</div>
    </S.Container>
  );
};

export const BalanceLine = memo(BalanceLineComponent, isEqual);
