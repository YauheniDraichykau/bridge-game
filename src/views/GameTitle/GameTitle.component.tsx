import { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { getBetSelector, getGameStatusSelector } from '../../store/common';
import * as S from './GameTitle.styles';

export const GameTitleComponent: FC = () => {
  const gameStatus = useSelector(getGameStatusSelector);
  const bet = useSelector(getBetSelector);

  return (
    <S.Container>
      {(gameStatus === 'not_started' || gameStatus === 'started') && (
        <>
          <S.PrimaryText>Кто выиграет?</S.PrimaryText>
          <S.SecondaryText>Сыграй в игру и испытай удачу</S.SecondaryText>
        </>
      )}
      {gameStatus === 'won' && (
        <S.PrimaryText>Вы выиграли ${bet * 2}!</S.PrimaryText>
      )}
      {gameStatus === 'lose' && <S.PrimaryText>Вы програли</S.PrimaryText>}
      {gameStatus === 'draw' && <S.PrimaryText>Ничья</S.PrimaryText>}
    </S.Container>
  );
};

export const GameTitle = memo(GameTitleComponent, isEqual);
