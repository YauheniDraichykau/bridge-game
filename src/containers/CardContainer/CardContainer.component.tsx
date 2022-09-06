import { memo, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import * as S from './CardContainer.styles';
import { Card } from '../../views/Card';
import { Button } from '../../controls/Button';
import { CardContainerProps } from './CardContainer.interfaces';
import {
  actions,
  getGameStatusSelector,
  getIsFetchingCardsSelector,
} from '../../store/common';

export const CardContainerComponent: FC<CardContainerProps> = ({
  type,
  card,
}: CardContainerProps) => {
  const gameStatus = useSelector(getGameStatusSelector);
  const isFetchingCards = useSelector(getIsFetchingCardsSelector);
  const dispatch = useDispatch();

  const handleChooseCard = () => {
    dispatch(actions.getGameResult(card));
  };

  return (
    <S.Container type={type}>
      <S.CardWrapper
        type='submit'
        onClick={handleChooseCard}
        disabled={isFetchingCards || gameStatus !== 'started'}
      >
        <Card card={card} />
      </S.CardWrapper>
      {gameStatus === 'started' && !isFetchingCards && (
        <S.ButtonWrapper>
          <Button
            label={type === 'left' ? 'слева' : 'справа'}
            viewType='primary'
            onClick={handleChooseCard}
          />
        </S.ButtonWrapper>
      )}
    </S.Container>
  );
};

export const CardContainer = memo(CardContainerComponent, isEqual);
