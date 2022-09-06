import { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { getGameStatusSelector } from '../../store/common';
import { CardProps } from './Card.interfaces';
import * as S from './Card.styles';

export const CardComponent: FC<CardProps> = ({ card }: CardProps) => {
  const gameStatus = useSelector(getGameStatusSelector);

  return (
    <S.Container>
      {['won', 'lose', 'draw'].includes(gameStatus) ? (
        <S.CardImg src={card?.image} />
      ) : (
        <h1>?</h1>
      )}
    </S.Container>
  );
};

export const Card = memo(CardComponent, isEqual);
