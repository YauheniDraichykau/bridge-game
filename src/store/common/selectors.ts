import { createSelector } from 'reselect'
import { AppState } from '../rootReducer'
import * as fromCommon from './reducer'
import { initialState } from './reducer'

export const getCommonState = (state: AppState): fromCommon.State => state.common || initialState

export const getCardsSelector = createSelector(getCommonState, state =>
  state.cards
)

export const getShuffledCardsSelector = createSelector(getCardsSelector, cards =>
  cards.sort(() => (Math.random() > .5) ? 1 : -1)
)

export const getIsFetchingCardsSelector = createSelector(getCommonState, state =>
  state.isFetchingCards
)

export const getDeckSelector = createSelector(getCommonState, state =>
  state.deck
)

export const getBalanceSelector = createSelector(getCommonState, state =>
  state.balance
)

export const getBetSelector = createSelector(getCommonState, state =>
  state.bet
)

export const getGameStatusSelector = createSelector(getCommonState, state =>
  state.gameStatus
)

export const getIsAbleToTakeBetSelector = createSelector(getCommonState, state =>
  state.balance >= state.bet
)