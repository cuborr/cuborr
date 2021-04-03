import { IUserState, IUserActionTypes, SET_CLIENT, SET_CONTRACTOR } from './types';

const initialState: IUserState = {
  clientID: undefined,
  contractorID: undefined,
};

export function userReducer(state = initialState, action: IUserActionTypes): IUserState {
  switch (action.type) {
    case SET_CLIENT: {
      return {
        ...state,
        clientID: action.payload,
      };
    }
    case SET_CONTRACTOR: {
      return {
        ...state,
        contractorID: action.payload,
      };
    }
    default:
      return state;
  }
}
