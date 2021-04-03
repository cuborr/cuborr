import { SET_CLIENT, SET_CONTRACTOR, IUserActionTypes } from './types';

export function setClient(id): IUserActionTypes {
  return {
    type: SET_CLIENT,
    payload: id,
  };
}

export function setContractor(id): IUserActionTypes {
  return {
    type: SET_CONTRACTOR,
    payload: id,
  };
}
