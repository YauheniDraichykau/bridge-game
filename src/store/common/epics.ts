import { AnyAction } from 'redux';
import { Epic, ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {actions, FETCH_DECK, FETCH_CARDS} from './actions'
import { FetchCardsResponse, FetchDeckResponse } from './types';

export const fetchDeckEpic: Epic<AnyAction> = action$ => action$.pipe(
  ofType(FETCH_DECK),
  mergeMap(() =>
    ajax.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).pipe(
      map(response => actions.setDeck(response as FetchDeckResponse))
    )
  )
);

export const fetchCardsEpic: Epic<AnyAction> = action$ => action$.pipe(
    ofType(FETCH_CARDS),
    mergeMap(action => 
      ajax.getJSON(`https://deckofcardsapi.com/api/deck/${action.payload}/draw/?count=2`).pipe(
        map(response => actions.setCards((response as FetchCardsResponse).cards))
      )
    )
  );
  