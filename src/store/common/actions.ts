import {Card, Deck, GameStatus} from '../../types/types'

export const FETCH_DECK = '@/FETCH_DECK';
export const SET_DECK = '@/SET_DECK';
export const FETCH_CARDS = '@/FETCH_CARDS';
export const SET_CARDS = '@/SET_CARDS';
export const SET_GAME_STATUS = '@/SET_GAME_STATUS'
export const TAKE_BET = '@/TAKE_BET'
export const ADD_BET = '@/ADD_BET'
export const SET_IS_FETCHING_CARDS = '@/SET_IS_FETCHING_CARDS'
export const GET_GAME_RESULT = '@/GET_GAME_RESULT'
export const SET_CLEAR_GAME = '@/SET_CLEAR_GAME'

export const actions = {
  fetchDeck: () =>
    ({
      type: FETCH_DECK
    } as const),
  setDeck: (payload: Deck) => ({
      type: SET_DECK,
      payload
    } as const),
  fetchCards: (payload: string) =>
    ({
      type: FETCH_CARDS,
      payload
    } as const),
  setCards: (payload: Card[]) => ({
    type: SET_CARDS,
    payload
  } as const),
  setGameStatus: (payload: GameStatus) =>
    ({
      type: SET_GAME_STATUS,
      payload
    } as const),
  takeBet: () =>
    ({
      type: TAKE_BET
    } as const),
  addBet: (rate: number) =>
    ({
      type: ADD_BET,
      payload: rate
    } as const),
  getGameResult: (chosenCard: Card) =>
    ({
      type: GET_GAME_RESULT,
      payload: chosenCard
    } as const),
  setIsFetchingCards: (payload: boolean) =>
    ({
      type: SET_IS_FETCHING_CARDS,
      payload
    } as const),
  setClearGame: () =>
    ({
      type: SET_CLEAR_GAME,
    } as const),
}