import * as fromCommon from './common/reducer';

export interface AppState {
  common: fromCommon.State;
}
const rootReducer = {
  common: fromCommon.reducer,
};

export default rootReducer;
