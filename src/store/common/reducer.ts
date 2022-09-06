import { compareCardValues } from '../../utils/compareCardValues'
import { Deck, GameStatus } from '../../types/types'
import { actions, SET_DECK, SET_CARDS, SET_GAME_STATUS, GET_GAME_RESULT, SET_IS_FETCHING_CARDS, SET_CLEAR_GAME } from './actions'
import { Card } from './types'
import { setBalance } from '../../utils/setBalance';

const CURRENT_BALANCE = 4000;
const CURRENT_BET = 2000;

export const initialState = {
  deck: null as Deck | null,
  balance: CURRENT_BALANCE,
  gameStatus: 'not_started' as GameStatus,
  cards: [] as Card[],
  isFetchingCards: false as boolean,
  bet: CURRENT_BET as number
}

export type State = typeof initialState

export type PropActions<T> = T extends { [key: string]: infer R } ? R : never
export type ReturnAnyActions<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropActions<T>
>

export type CommonAnyActions = ReturnAnyActions<typeof actions>
export const reducer = (state: State = initialState, action: CommonAnyActions = {} as CommonAnyActions): State => {
  switch (action.type) {
    case SET_DECK:
      return {
        ...state,
        deck: action.payload
      }
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
        isFetchingCards: false,
        balance: state.balance - state.bet
      }
    case SET_IS_FETCHING_CARDS:
      return {
        ...state,
        isFetchingCards: action.payload
      }
    case SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload
      }
    case GET_GAME_RESULT:
      return {
        ...state,
        gameStatus: compareCardValues(state.cards, action.payload),
        balance: setBalance(state.balance, state.bet, compareCardValues(state.cards, action.payload))
      }
    case SET_CLEAR_GAME:
      return {
        ...initialState, 
        balance: state.balance
      }
    default:
      return state
  }
}
