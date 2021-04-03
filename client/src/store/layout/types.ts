export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_PROMPT = 'SET_PROMPT';
export const SET_ALERT = 'SET_ALERT';

export enum PromptType {
  Success,
  Error,
  Info,
}
export interface IPromptState {
  type: PromptType;
  duration: number;
  text: string;
}

export interface IAlertState {
  title: string;
  text: string;
  confirm: string;
  cancel: string;
  onClick: () => void;
}

export interface ILayoutState {
  modalIsVisible: boolean;
  modalContent: JSX.Element | null;
  prompt?: IPromptState;
  alert?: IAlertState;
}

interface ISetPromptAction {
  type: typeof SET_PROMPT;
  payload?: IPromptState;
}


interface ISetAlertAction {
  type: typeof SET_ALERT;
  payload?: IAlertState;
}

interface IOpenModalAction {
  type: typeof OPEN_MODAL;
  payload: JSX.Element;
}

interface ICloseModalAction {
  type: typeof CLOSE_MODAL;
}

export type ILayoutActionTypes = IOpenModalAction | ICloseModalAction | ISetPromptAction | ISetAlertAction;

export interface LayoutActionProps {
  openModal: (payload: JSX.Element) => ILayoutActionTypes;
  closeModal: () => ILayoutActionTypes;
  setPrompt: (payload?: IPromptState) => ILayoutActionTypes;
  setAlert: (payload?: IAlertState) => ILayoutActionTypes;
}
