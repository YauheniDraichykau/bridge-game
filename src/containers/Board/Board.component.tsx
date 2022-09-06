import { memo, FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import * as S from './Board.styles';
import { CardContainer } from '../CardContainer';
import { Button } from '../../controls/Button';
import {
  actions,
  getShuffledCardsSelector,
  getDeckSelector,
  getGameStatusSelector,
  getIsAbleToTakeBetSelector,
} from '../../store/common';

export const BoardComponent: FC = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(getGameStatusSelector);
  const deck = useSelector(getDeckSelector);
  const cards = useSelector(getShuffledCardsSelector);
  const isAbleToTakeBet = useSelector(getIsAbleToTakeBetSelector);

  const handleFetchDeck = () => {
    dispatch(actions.fetchDeck());
  };

  const handleFetchCards = useCallback(
    (deckId: string) => {
      dispatch(actions.fetchCards(deckId));
    },
    [dispatch]
  );

  const handleStartGame = () => {
    dispatch(actions.setIsFetchingCards(true));
    dispatch(actions.takeBet());
    dispatch(actions.setGameStatus('started'));
    handleFetchDeck();
  };

  const handleRestartGame = () => {
    handleStartGame();
  };

  useEffect(() => {
    if (deck) {
      handleFetchCards(deck.deck_id);
    }
  }, [deck, handleFetchCards]);

  return (
    <S.Container>
      <CardContainer type='left' card={cards[0]} />
      <S.ButtonWrapper>
        {gameStatus === 'not_started' && (
          <Button
            label='Начать игру'
            viewType='primary'
            onClick={handleStartGame}
          />
        )}
        {['won', 'lose', 'draw'].includes(gameStatus) && (
          <div>
            {isAbleToTakeBet ? (
              <Button
                label='Cыграть еще'
                viewType='primary'
                onClick={handleRestartGame}
              />
            ) : (
              <div>Не хватает денег</div>
            )}
          </div>
        )}
      </S.ButtonWrapper>
      <CardContainer type='right' card={cards[1]} />
    </S.Container>
  );
};

export const Board = memo(BoardComponent, isEqual);
