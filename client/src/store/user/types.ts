export const SET_CLIENT = 'SET_CLIENT';
export const SET_CONTRACTOR = 'SET_CONTRACTOR';

export interface IUserState {
  clientID?: string;
  contractorID?: string;
}

interface ISetClientAction {
  type: typeof SET_CLIENT;
  payload: string;
}

interface ISetContractorAction {
  type: typeof SET_CONTRACTOR;
  payload: string;
}

export type IUserActionTypes = ISetClientAction | ISetContractorAction;

export interface IUserActionProps {
  setClient: (payload: string) => IUserActionTypes;
  setContractor: (payload: string) => IUserActionTypes;
}
