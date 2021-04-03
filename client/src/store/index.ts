import { combineReducers } from 'redux';
import { layoutReducer } from './layout/reducers';
import { userReducer } from './user/reducers';

export const rootReducer = combineReducers({
  layout: layoutReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
