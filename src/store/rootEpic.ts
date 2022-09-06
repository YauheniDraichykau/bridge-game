import { combineEpics } from 'redux-observable';
import { fetchDeckEpic, fetchCardsEpic } from './common/epics';

export const rootEpic = combineEpics(
    fetchDeckEpic,
    fetchCardsEpic
);