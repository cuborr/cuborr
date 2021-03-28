import { combineReducers } from 'redux';
import { layoutReducer } from './layout/reducers';

export const rootReducer = combineReducers({
  layout: layoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
